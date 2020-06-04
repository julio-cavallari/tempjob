import React, {useState, useRef, useEffect} from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { BackHandler, Dimensions } from 'react-native';
import { useTheme, Title, List, Button, Portal, Searchbar, Checkbox, Chip } from 'react-native-paper';
import { Container, ModalContainer, ModalHeader, ButtonsContainer, ChipsContainer } from './styles';
import PropTypes from 'prop-types';
import _ from 'lodash';
import color from 'color';
import Modal from 'react-native-modal';


function ModalSelect({children, data, onSelect, headerTitle, keyLeading, disabled, isSearchable, isMulti, maxSelectedItems, selected}){
  const [visible, setVisible] = useState(false);
  const [scrollOffset, setScrollOffset] = useState(0);
  const [checkedItems, setCheckedItems] = useState(selected);
  const [filterText, setFilterText] = useState("");
  const handleOpen = () => setVisible(true);
  const handleClose = () => setVisible(false);
  const theme = useTheme();

  const flatListRef = useRef(null);
  const searchBarRef = useRef(null);

  const handleOnScroll = event => {
    setScrollOffset(event.nativeEvent.contentOffset.y);
  };
  const handleScrollTo = p => {
    if (flatListRef.current) {
      flatListRef.current.scrollTo(p);
    }
  };

  const handleCheckedItem = (item) => {
    if(checkedItems?.filter(checkedItem => checkedItem?.id === item.id).length === 1){
      setCheckedItems([
        ...checkedItems?.filter(checkedItem => checkedItem?.id !== item.id)
      ]);
    }else{
      if(checkedItems?.length === 0){
        setCheckedItems([
          item
        ]);
      }
      else if(checkedItems?.length < maxSelectedItems && checkedItems?.length > 0){
        setCheckedItems([
          ...checkedItems,
          item
        ]);
      }else{
        const firstIndex = checkedItems?.shift();
        setCheckedItems([
          ...checkedItems?.filter(checkedItem => checkedItem?.id !== firstIndex.id),
          item
        ])
      }
    }
  }

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        if (visible) {
          return true;
        }else {
          return false;
        }
      };
      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () => BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, [visible])
  );

  return (
    <>
      <Portal>
        <Modal
          isVisible={visible}
          onSwipeComplete={handleClose}
          swipeDirection="down"
          onBackdropPress={handleClose}
          onBackButtonPress={handleClose}
          scrollTo={handleScrollTo}
          scrollOffset={scrollOffset}
          scrollOffsetMax={data.length * 48 - (Dimensions.get('window').height - 136)} // content height - ScrollView height
          propagateSwipe={true}
          backdropColor={theme.colors.backdrop}
          avoidKeyboard={true}
          backdropOpacity={1}
          onModalWillHide={() => isMulti ? onSelect(checkedItems) : () => {}}
          style={{
            justifyContent: 'flex-end',
            margin: 0
          }}
        >
          <ModalContainer>
            <ModalHeader>
              <Title>{headerTitle}</Title>
              {isSearchable && (<Searchbar
                placeholder="Pesquisar"
                onChangeText={setFilterText}
                value={filterText}
                ref={searchBarRef}
              />)}
            </ModalHeader>
            <Container
              ref={flatListRef}
              onScroll={handleOnScroll}
              data={data.filter(item => _.startsWith(_.toLower(item.name), _.toLower(filterText)))}
              extraData={[checkedItems]}
              renderItem={({ item }) => (
                <List.Item
                  title={item.name}
                  style={{
                    backgroundColor: color(theme.colors.surface).darken(
                      isMulti ?
                      checkedItems?.filter(checkedItem => checkedItem?.id === item.id).length === 1 ?
                      0.3 :
                      0 : 0
                    )
                  }}
                  onPress={() => {
                    if(isMulti){
                      handleCheckedItem(item);
                    }
                    else{
                      handleClose();
                      onSelect(item);
                    }
                  }}
                  right={() => isMulti && (
                    <Checkbox
                      status={checkedItems?.filter(checkedItem => checkedItem?.id === item.id).length === 1 ? "checked" : "unchecked"}
                      onPress={() => handleCheckedItem(item)}
                    />
                  )}
                />
              )}
              ListEmptyComponent={(
                <List.Item
                  title="Nenhum dado encontrado"
                />
              )}
              keyExtractor={item => `${keyLeading}_${item.id.toString()}`}
              initialNumToRender={25}
              removeClippedSubviews={true}
              windowSize={20}
              removeClippedSubviews={false}
            />
            {isMulti && (<ButtonsContainer>
              <Button
                onPress={() => {
                  handleClose();
                  onSelect(checkedItems);
                }}
              >
                Selecionar
              </Button>
            </ButtonsContainer>)}
          </ModalContainer>
        </Modal>
      </Portal>
      <Button
        mode="outlined"
        onPress={handleOpen}
        disabled={disabled}
        uppercase={false}
        contentStyle={{
          justifyContent: "flex-start",
          paddingVertical: 7.5
        }}
        labelStyle={{
          fontSize: 16,
          color: theme.colors.text,
          letterSpacing: 0,
          ...theme.fonts.regular
        }}
        style={{
          marginTop: 7.5,
          marginBottom: 15,
          borderWidth: 2
        }}
      >
          {children}
      </Button>
      {isMulti && (
        <ChipsContainer count={checkedItems?.length}>
        {checkedItems?.map(checkedItem => (
          <Chip
            style={{
              marginRight: 10,
              marginVertical: 5,
              width: "100%",
            }}
            textStyle={{
              width: "100%",
              maxWidth: "88%",
            }}
            mode="outlined"
            key={checkedItem.id}
            onClose={() => {
              setCheckedItems([
                ...checkedItems.filter(item => item?.id !== checkedItem.id)
              ]);
            }}
          >
            {checkedItem.name}
          </Chip>))}
        </ChipsContainer>
      )}
    </>
  );
}

ModalSelect.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
  headerTitle: PropTypes.string,
  keyLeading: PropTypes.string,
  disabled: PropTypes.bool,
  isSearchable: PropTypes.bool,
  maxSelectedItems: PropTypes.number,
  isMulti: PropTypes.bool,
  selected: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.array
  ]),
};

ModalSelect.defaultProps = {
  data: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
      ]),
      name: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
      ])
    })
  ),
  onSelect: () => {},
  headerTitle: "Select one option",
  keyLeading: "modal_select",
  disabled: false,
  isSearchable: false,
  isMulti: false,
  maxSelectedItems: 3,
  selected: []
};

export default ModalSelect;
