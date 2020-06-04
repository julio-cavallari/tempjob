<?php

namespace App\Http\Requests;

use App\Custom\FormRequestCustom;

class UserRequest extends FormRequestCustom{

    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize(){
        return true;
    }

    /**
     * Get rules for validator errors.
     *
     * @return array
     */
    public function rules(){
        switch($this->method()) {
            case 'PUT':
                return [
                    'name'             => 'required|string|min:4|max:255',
                    'email'            => 'required|email|min:5|max:255|unique:users,email,'.$this->route('id'),
                    'cpf'              => ['nullable','string','regex:/(\d{3}.\d{3}.\d{3}-\d{2})|(\d{11})/','max:14','unique:users,cpf,'.$this->route('id')],
                    'phone'            => ['nullable','string','regex:/(?:\(?([1-9][0-9])\)?\s?) (?:((?:9\d|[2-9])\d{3})\-?(\d{4}))|(\d{11})/','max:15'],
                    'birthday'         => ['nullable','string','regex:/([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}|(\d{8})/','max:10','min:8'],
                    'state'            => 'required|string|max:255',
                    'city'             => 'required|string|max:255',
                    'password'         => 'required|same:confirm_password|string|min:4|max:255',
                    'confirm_password' => 'required|same:password|string|min:4|max:255',
                    'tags'             => 'required|array|min:1|max:3'
                ];
            default:
                return [
                    'name'             => 'required|string|min:4|max:255',
                    'email'            => 'required|email|min:5|max:255|unique:users,email,'.$this->route('id'),
                    'cpf'              => ['nullable','string','regex:/(\d{3}.\d{3}.\d{3}-\d{2})|(\d{11})/','max:14'],
                    'phone'            => ['nullable','string','regex:/(?:\(?([1-9][0-9])\)?\s?) (?:((?:9\d|[2-9])\d{3})\-?(\d{4}))|(\d{11})/','max:15'],
                    'birthday'         => ['nullable','string','regex:/([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}|(\d{8})/','max:10','min:8'],
                    'state'            => 'required|string|max:255',
                    'city'             => 'required|string|max:255',
                    'password'         => 'required|same:confirm_password|string|min:4|max:255',
                    'confirm_password' => 'required|same:password|string|min:4|max:255',
                    'tags'             => 'required|array|min:1|max:3'
                ];
        }
    }

    /**
     * Get custom attributes for validator errors.
     *
     * @return array
     */
    public function attributes()
    {
        return [
            'name'             => 'Nome',
            'email'            => 'Email',
            'cpf'              => 'CPF',
            'phone'            => 'Telefone/Celular',
            'state'            => 'Estado',
            'city'             => 'Cidade',
            'password'         => 'Senha',
            'confirm_password' => 'Confirmação de senha',
            'tags'             => 'Vagas preferidas',
            'birthday'          => 'Data de nascimento'
        ];
    }

    /**
     *
     */
    public function messages(){
        return [
            'unique'   => ':attribute digitado já consta em nosso banco de dados',
            'email'    => 'Este campo deve conter um email válido',
            'regex'    => 'Formato inválido para :attribute',
            'required' => ':attribute é obrigatório',
            'max'     => ':attribute deve ter no máximo :max caracteres',
            'min'     => ':attribute deve ter no mínimo :min caracteres',
            'same'     => 'Senhas não conferem'
        ];
    }

}
