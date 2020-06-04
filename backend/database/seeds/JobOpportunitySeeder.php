<?php

use Illuminate\Database\Seeder;
use App\Models\JobOpportunity;
use App\Models\Company;
use App\Models\Document;
use App\Models\JobOpportunityDocument;

class JobOpportunitySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $opportunities = [
            (object)[
                "name" => "Nuclear Power Engineer",
                "description" => "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
                "workload_start" => "10:00",
                "workload_end" => "18:00",
                "workload_pause" => "1h:15m",
                "schooling" => "Mestrado",
                "schooling_level" => "Incompleto",
                "hiring_period_start" => "26/06/2020",
                "hiring_period_end" => "03/09/2020"
            ], (object)[
                "name" => "Tax Accountant",
                "description" => "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
                "workload_start" => "09:00",
                "workload_end" => "20:00",
                "workload_pause" => "1h:15m",
                "schooling" => "Doutorado",
                "schooling_level" => "Completo",
                "hiring_period_start" => "11/06/2020",
                "hiring_period_end" => "26/08/2020"
            ], (object)[
                "name" => "Chemical Engineer",
                "description" => "Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.",
                "workload_start" => "08:00",
                "workload_end" => "18:00",
                "workload_pause" => "1h:15m",
                "schooling" => "Médio",
                "schooling_level" => "Incompleto",
                "hiring_period_start" => "12/07/2020",
                "hiring_period_end" => "28/08/2020"
            ], (object)[
                "name" => "Web Developer II",
                "description" => "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.",
                "workload_start" => "07:00",
                "workload_end" => "17:00",
                "workload_pause" => "1h",
                "schooling" => "Pós-Graduação",
                "schooling_level" => "Incompleto",
                "hiring_period_start" => "18/07/2020",
                "hiring_period_end" => "30/08/2020"
            ], (object)[
                "name" => "Senior Cost Accountant",
                "description" => "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.",
                "workload_start" => "07:00",
                "workload_end" => "18:00",
                "workload_pause" => "1h:30m",
                "schooling" => "Médio",
                "schooling_level" => "Incompleto",
                "hiring_period_start" => "17/06/2020",
                "hiring_period_end" => "16/09/2020"
            ], (object)[
                "name" => "Staff Scientist",
                "description" => "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.",
                "workload_start" => "09:00",
                "workload_end" => "18:00",
                "workload_pause" => "1h:45m",
                "schooling" => "Doutorado",
                "schooling_level" => "Completo",
                "hiring_period_start" => "11/06/2020",
                "hiring_period_end" => "10/08/2020"
            ], (object)[
                "name" => "Environmental Tech",
                "description" => "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.",
                "workload_start" => "09:00",
                "workload_end" => "18:00",
                "workload_pause" => "1h:30m",
                "schooling" => "Doutorado",
                "schooling_level" => "Completo",
                "hiring_period_start" => "01/06/2020",
                "hiring_period_end" => "24/08/2020"
            ], (object)[
                "name" => "Geologist III",
                "description" => "Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.",
                "workload_start" => "08:00",
                "workload_end" => "20:00",
                "workload_pause" => "1h:15m",
                "schooling" => "Superior",
                "schooling_level" => "Completo",
                "hiring_period_start" => "24/06/2020",
                "hiring_period_end" => "17/09/2020"
            ], (object)[
                "name" => "Account Executive",
                "description" => "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.",
                "workload_start" => "09:00",
                "workload_end" => "17:00",
                "workload_pause" => "1h",
                "schooling" => "Superior",
                "schooling_level" => "Incompleto",
                "hiring_period_start" => "25/06/2020",
                "hiring_period_end" => "10/09/2020"
            ], (object)[
                "name" => "VP Accounting",
                "description" => "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.",
                "workload_start" => "10:00",
                "workload_end" => "20:00",
                "workload_pause" => "1h",
                "schooling" => "Médio",
                "schooling_level" => "Incompleto",
                "hiring_period_start" => "22/06/2020",
                "hiring_period_end" => "31/08/2020"
            ], (object)[
                "name" => "Structural Engineer",
                "description" => "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
                "workload_start" => "08:00",
                "workload_end" => "20:00",
                "workload_pause" => "1h:30m",
                "schooling" => "Doutorado",
                "schooling_level" => "Incompleto",
                "hiring_period_start" => "31/05/2020",
                "hiring_period_end" => "27/07/2020"
            ], (object)[
                "name" => "Environmental Tech",
                "description" => "Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo.",
                "workload_start" => "07:00",
                "workload_end" => "19:00",
                "workload_pause" => "1h:15m",
                "schooling" => "Superior",
                "schooling_level" => "Completo",
                "hiring_period_start" => "23/06/2020",
                "hiring_period_end" => "12/09/2020"
            ], (object)[
                "name" => "Cost Accountant",
                "description" => "Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
                "workload_start" => "10:00",
                "workload_end" => "19:00",
                "workload_pause" => "1h:45m",
                "schooling" => "Pós-Graduação",
                "schooling_level" => "Incompleto",
                "hiring_period_start" => "19/07/2020",
                "hiring_period_end" => "11/09/2020"
            ], (object)[
                "name" => "Editor",
                "description" => "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus.",
                "workload_start" => "07:00",
                "workload_end" => "18:00",
                "workload_pause" => "1h:30m",
                "schooling" => "Superior",
                "schooling_level" => "Incompleto",
                "hiring_period_start" => "25/06/2020",
                "hiring_period_end" => "18/09/2020"
            ], (object)[
                "name" => "Recruiter",
                "description" => "Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.",
                "workload_start" => "08:00",
                "workload_end" => "20:00",
                "workload_pause" => "1h:45m",
                "schooling" => "Médio",
                "schooling_level" => "Completo",
                "hiring_period_start" => "17/06/2020",
                "hiring_period_end" => "07/09/2020"
            ], (object)[
                "name" => "Marketing Manager",
                "description" => "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
                "workload_start" => "10:00",
                "workload_end" => "17:00",
                "workload_pause" => "1h",
                "schooling" => "Mestrado",
                "schooling_level" => "Incompleto",
                "hiring_period_start" => "15/06/2020",
                "hiring_period_end" => "23/08/2020"
            ], (object)[
                "name" => "Nurse",
                "description" => "Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl.",
                "workload_start" => "08:00",
                "workload_end" => "19:00",
                "workload_pause" => "1h:15m",
                "schooling" => "Pós-Graduação",
                "schooling_level" => "Completo",
                "hiring_period_start" => "17/07/2020",
                "hiring_period_end" => "05/09/2020"
            ], (object)[
                "name" => "Assistant Manager",
                "description" => "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.",
                "workload_start" => "08:00",
                "workload_end" => "17:00",
                "workload_pause" => "1h",
                "schooling" => "Doutorado",
                "schooling_level" => "Incompleto",
                "hiring_period_start" => "29/05/2020",
                "hiring_period_end" => "07/09/2020"
            ], (object)[
                "name" => "Health Coach I",
                "description" => "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.",
                "workload_start" => "10:00",
                "workload_end" => "20:00",
                "workload_pause" => "1h:45m",
                "schooling" => "Mestrado",
                "schooling_level" => "Incompleto",
                "hiring_period_start" => "21/07/2020",
                "hiring_period_end" => "04/08/2020"
            ], (object)[
                "name" => "Librarian",
                "description" => "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum.",
                "workload_start" => "08:00",
                "workload_end" => "20:00",
                "workload_pause" => "1h:15m",
                "schooling" => "Superior",
                "schooling_level" => "Incompleto",
                "hiring_period_start" => "08/07/2020",
                "hiring_period_end" => "20/09/2020"
            ], (object)[
                "name" => "Occupational Therapist",
                "description" => "Nunc purus. Phasellus in felis. Donec semper sapien a libero.",
                "workload_start" => "08:00",
                "workload_end" => "18:00",
                "workload_pause" => "1h:45m",
                "schooling" => "Superior",
                "schooling_level" => "Incompleto",
                "hiring_period_start" => "18/07/2020",
                "hiring_period_end" => "17/09/2020"
            ], (object)[
                "name" => "Desktop Support Technician",
                "description" => "In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.",
                "workload_start" => "10:00",
                "workload_end" => "19:00",
                "workload_pause" => "1h:45m",
                "schooling" => "Médio",
                "schooling_level" => "Incompleto",
                "hiring_period_start" => "01/07/2020",
                "hiring_period_end" => "02/09/2020"
            ], (object)[
                "name" => "General Manager",
                "description" => "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
                "workload_start" => "10:00",
                "workload_end" => "18:00",
                "workload_pause" => "1h:30m",
                "schooling" => "Médio",
                "schooling_level" => "Incompleto",
                "hiring_period_start" => "25/06/2020",
                "hiring_period_end" => "24/08/2020"
            ], (object)[
                "name" => "Office Assistant I",
                "description" => "Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
                "workload_start" => "10:00",
                "workload_end" => "20:00",
                "workload_pause" => "1h:45m",
                "schooling" => "Mestrado",
                "schooling_level" => "Completo",
                "hiring_period_start" => "27/05/2020",
                "hiring_period_end" => "31/08/2020"
            ], (object)[
                "name" => "Software Test Engineer III",
                "description" => "Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
                "workload_start" => "09:00",
                "workload_end" => "20:00",
                "workload_pause" => "1h",
                "schooling" => "Médio",
                "schooling_level" => "Incompleto",
                "hiring_period_start" => "19/07/2020",
                "hiring_period_end" => "19/08/2020"
            ], (object)[
                "name" => "Data Coordiator",
                "description" => "Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.",
                "workload_start" => "07:00",
                "workload_end" => "18:00",
                "workload_pause" => "1h",
                "schooling" => "Doutorado",
                "schooling_level" => "Completo",
                "hiring_period_start" => "25/05/2020",
                "hiring_period_end" => "19/09/2020"
            ], (object)[
                "name" => "Analyst Programmer",
                "description" => "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis.",
                "workload_start" => "09:00",
                "workload_end" => "20:00",
                "workload_pause" => "1h:45m",
                "schooling" => "Doutorado",
                "schooling_level" => "Completo",
                "hiring_period_start" => "06/06/2020",
                "hiring_period_end" => "10/08/2020"
            ], (object)[
                "name" => "Accountant I",
                "description" => "Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc.",
                "workload_start" => "09:00",
                "workload_end" => "17:00",
                "workload_pause" => "1h:45m",
                "schooling" => "Doutorado",
                "schooling_level" => "Incompleto",
                "hiring_period_start" => "03/07/2020",
                "hiring_period_end" => "17/09/2020"
            ], (object)[
                "name" => "Senior Developer",
                "description" => "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.",
                "workload_start" => "07:00",
                "workload_end" => "18:00",
                "workload_pause" => "1h",
                "schooling" => "Superior",
                "schooling_level" => "Incompleto",
                "hiring_period_start" => "04/06/2020",
                "hiring_period_end" => "18/09/2020"
            ], (object)[
                "name" => "VP Product Management",
                "description" => "Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.",
                "workload_start" => "10:00",
                "workload_end" => "19:00",
                "workload_pause" => "1h:15m",
                "schooling" => "Superior",
                "schooling_level" => "Incompleto",
                "hiring_period_start" => "09/06/2020",
                "hiring_period_end" => "16/09/2020"
            ], (object)[
                "name" => "Electrical Engineer",
                "description" => "Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
                "workload_start" => "10:00",
                "workload_end" => "18:00",
                "workload_pause" => "1h:30m",
                "schooling" => "Pós-Graduação",
                "schooling_level" => "Incompleto",
                "hiring_period_start" => "26/06/2020",
                "hiring_period_end" => "08/09/2020"
            ], (object)[
                "name" => "Engineer I",
                "description" => "Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo.",
                "workload_start" => "09:00",
                "workload_end" => "17:00",
                "workload_pause" => "1h:15m",
                "schooling" => "Médio",
                "schooling_level" => "Completo",
                "hiring_period_start" => "17/07/2020",
                "hiring_period_end" => "18/08/2020"
            ], (object)[
                "name" => "Professor",
                "description" => "Nullam varius. Nulla facilisi.",
                "workload_start" => "09:00",
                "workload_end" => "18:00",
                "workload_pause" => "1h:15m",
                "schooling" => "Mestrado",
                "schooling_level" => "Incompleto",
                "hiring_period_start" => "25/05/2020",
                "hiring_period_end" => "09/08/2020"
            ], (object)[
                "name" => "Civil Engineer",
                "description" => "Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.",
                "workload_start" => "09:00",
                "workload_end" => "17:00",
                "workload_pause" => "1h",
                "schooling" => "Doutorado",
                "schooling_level" => "Completo",
                "hiring_period_start" => "25/05/2020",
                "hiring_period_end" => "14/09/2020"
            ], (object)[
                "name" => "Design Engineer",
                "description" => "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla.",
                "workload_start" => "07:00",
                "workload_end" => "19:00",
                "workload_pause" => "1h:45m",
                "schooling" => "Doutorado",
                "schooling_level" => "Completo",
                "hiring_period_start" => "30/06/2020",
                "hiring_period_end" => "08/08/2020"
            ], (object)[
                "name" => "Programmer Analyst I",
                "description" => "Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
                "workload_start" => "08:00",
                "workload_end" => "17:00",
                "workload_pause" => "1h",
                "schooling" => "Mestrado",
                "schooling_level" => "Completo",
                "hiring_period_start" => "11/07/2020",
                "hiring_period_end" => "15/09/2020"
            ], (object)[
                "name" => "Professor",
                "description" => "Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
                "workload_start" => "09:00",
                "workload_end" => "18:00",
                "workload_pause" => "1h",
                "schooling" => "Mestrado",
                "schooling_level" => "Completo",
                "hiring_period_start" => "14/06/2020",
                "hiring_period_end" => "25/07/2020"
            ], (object)[
                "name" => "Automation Specialist IV",
                "description" => "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.",
                "workload_start" => "10:00",
                "workload_end" => "20:00",
                "workload_pause" => "1h",
                "schooling" => "Pós-Graduação",
                "schooling_level" => "Incompleto",
                "hiring_period_start" => "30/05/2020",
                "hiring_period_end" => "27/08/2020"
            ], (object)[
                "name" => "Geologist IV",
                "description" => "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.",
                "workload_start" => "10:00",
                "workload_end" => "18:00",
                "workload_pause" => "1h",
                "schooling" => "Superior",
                "schooling_level" => "Completo",
                "hiring_period_start" => "14/06/2020",
                "hiring_period_end" => "30/08/2020"
            ], (object)[
                "name" => "Speech Pathologist",
                "description" => "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.",
                "workload_start" => "08:00",
                "workload_end" => "18:00",
                "workload_pause" => "1h",
                "schooling" => "Superior",
                "schooling_level" => "Completo",
                "hiring_period_start" => "01/06/2020",
                "hiring_period_end" => "22/08/2020"
            ], (object)[
                "name" => "Senior Quality Engineer",
                "description" => "Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula.",
                "workload_start" => "07:00",
                "workload_end" => "20:00",
                "workload_pause" => "1h",
                "schooling" => "Médio",
                "schooling_level" => "Incompleto",
                "hiring_period_start" => "30/05/2020",
                "hiring_period_end" => "03/08/2020"
            ], (object)[
                "name" => "GIS Technical Architect",
                "description" => "Nunc rhoncus dui vel sem. Sed sagittis.",
                "workload_start" => "10:00",
                "workload_end" => "17:00",
                "workload_pause" => "1h:30m",
                "schooling" => "Pós-Graduação",
                "schooling_level" => "Completo",
                "hiring_period_start" => "22/07/2020",
                "hiring_period_end" => "15/09/2020"
            ], (object)[
                "name" => "Chemical Engineer",
                "description" => "Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
                "workload_start" => "10:00",
                "workload_end" => "18:00",
                "workload_pause" => "1h:30m",
                "schooling" => "Mestrado",
                "schooling_level" => "Incompleto",
                "hiring_period_start" => "12/07/2020",
                "hiring_period_end" => "16/08/2020"
            ], (object)[
                "name" => "Software Consultant",
                "description" => "Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.",
                "workload_start" => "09:00",
                "workload_end" => "18:00",
                "workload_pause" => "1h:15m",
                "schooling" => "Pós-Graduação",
                "schooling_level" => "Incompleto",
                "hiring_period_start" => "26/05/2020",
                "hiring_period_end" => "17/08/2020"
            ], (object)[
                "name" => "Statistician III",
                "description" => "Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
                "workload_start" => "09:00",
                "workload_end" => "18:00",
                "workload_pause" => "1h:30m",
                "schooling" => "Superior",
                "schooling_level" => "Incompleto",
                "hiring_period_start" => "27/05/2020",
                "hiring_period_end" => "16/09/2020"
            ], (object)[
                "name" => "Administrative Officer",
                "description" => "Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.",
                "workload_start" => "10:00",
                "workload_end" => "20:00",
                "workload_pause" => "1h:45m",
                "schooling" => "Doutorado",
                "schooling_level" => "Completo",
                "hiring_period_start" => "19/06/2020",
                "hiring_period_end" => "28/08/2020"
            ], (object)[
                "name" => "Social Worker",
                "description" => "Morbi a ipsum. Integer a nibh.",
                "workload_start" => "10:00",
                "workload_end" => "20:00",
                "workload_pause" => "1h:30m",
                "schooling" => "Superior",
                "schooling_level" => "Incompleto",
                "hiring_period_start" => "12/07/2020",
                "hiring_period_end" => "02/09/2020"
            ], (object)[
                "name" => "Research Assistant IV",
                "description" => "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla.",
                "workload_start" => "08:00",
                "workload_end" => "17:00",
                "workload_pause" => "1h:45m",
                "schooling" => "Doutorado",
                "schooling_level" => "Incompleto",
                "hiring_period_start" => "12/07/2020",
                "hiring_period_end" => "18/08/2020"
            ], (object)[
                "name" => "General Manager",
                "description" => "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.",
                "workload_start" => "10:00",
                "workload_end" => "17:00",
                "workload_pause" => "1h:30m",
                "schooling" => "Doutorado",
                "schooling_level" => "Incompleto",
                "hiring_period_start" => "01/07/2020",
                "hiring_period_end" => "26/08/2020"
            ], (object)[
                "name" => "Legal Assistant",
                "description" => "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula.",
                "workload_start" => "08:00",
                "workload_end" => "18:00",
                "workload_pause" => "1h:15m",
                "schooling" => "Superior",
                "schooling_level" => "Completo",
                "hiring_period_start" => "07/07/2020",
                "hiring_period_end" => "19/08/2020"
            ], (object)[
                "name" => "Engineer I",
                "description" => "Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
                "workload_start" => "09:00",
                "workload_end" => "18:00",
                "workload_pause" => "1h:30m",
                "schooling" => "Superior",
                "schooling_level" => "Incompleto",
                "hiring_period_start" => "14/07/2020",
                "hiring_period_end" => "15/09/2020"
            ], (object)[
                "name" => "Operator",
                "description" => "Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
                "workload_start" => "07:00",
                "workload_end" => "19:00",
                "workload_pause" => "1h:15m",
                "schooling" => "Médio",
                "schooling_level" => "Incompleto",
                "hiring_period_start" => "29/05/2020",
                "hiring_period_end" => "21/09/2020"
            ], (object)[
                "name" => "Administrative Assistant III",
                "description" => "Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
                "workload_start" => "07:00",
                "workload_end" => "17:00",
                "workload_pause" => "1h:30m",
                "schooling" => "Superior",
                "schooling_level" => "Incompleto",
                "hiring_period_start" => "16/06/2020",
                "hiring_period_end" => "29/08/2020"
            ], (object)[
                "name" => "VP Sales",
                "description" => "Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
                "workload_start" => "08:00",
                "workload_end" => "20:00",
                "workload_pause" => "1h",
                "schooling" => "Pós-Graduação",
                "schooling_level" => "Completo",
                "hiring_period_start" => "10/07/2020",
                "hiring_period_end" => "26/07/2020"
            ], (object)[
                "name" => "Systems Administrator I",
                "description" => "Integer ac leo. Pellentesque ultrices mattis odio.",
                "workload_start" => "07:00",
                "workload_end" => "17:00",
                "workload_pause" => "1h",
                "schooling" => "Doutorado",
                "schooling_level" => "Completo",
                "hiring_period_start" => "25/06/2020",
                "hiring_period_end" => "13/08/2020"
            ], (object)[
                "name" => "Programmer II",
                "description" => "Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero.",
                "workload_start" => "07:00",
                "workload_end" => "20:00",
                "workload_pause" => "1h:45m",
                "schooling" => "Superior",
                "schooling_level" => "Incompleto",
                "hiring_period_start" => "28/06/2020",
                "hiring_period_end" => "08/08/2020"
            ], (object)[
                "name" => "Structural Analysis Engineer",
                "description" => "Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
                "workload_start" => "10:00",
                "workload_end" => "17:00",
                "workload_pause" => "1h:30m",
                "schooling" => "Mestrado",
                "schooling_level" => "Completo",
                "hiring_period_start" => "11/07/2020",
                "hiring_period_end" => "09/09/2020"
            ], (object)[
                "name" => "Nurse Practicioner",
                "description" => "Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
                "workload_start" => "09:00",
                "workload_end" => "18:00",
                "workload_pause" => "1h:45m",
                "schooling" => "Superior",
                "schooling_level" => "Incompleto",
                "hiring_period_start" => "17/07/2020",
                "hiring_period_end" => "18/09/2020"
            ], (object)[
                "name" => "Analyst Programmer",
                "description" => "Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo.",
                "workload_start" => "10:00",
                "workload_end" => "20:00",
                "workload_pause" => "1h:30m",
                "schooling" => "Superior",
                "schooling_level" => "Incompleto",
                "hiring_period_start" => "27/05/2020",
                "hiring_period_end" => "30/07/2020"
            ], (object)[
                "name" => "Design Engineer",
                "description" => "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.",
                "workload_start" => "10:00",
                "workload_end" => "18:00",
                "workload_pause" => "1h",
                "schooling" => "Superior",
                "schooling_level" => "Incompleto",
                "hiring_period_start" => "21/06/2020",
                "hiring_period_end" => "25/07/2020"
            ], (object)[
                "name" => "Graphic Designer",
                "description" => "Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo.",
                "workload_start" => "07:00",
                "workload_end" => "19:00",
                "workload_pause" => "1h:30m",
                "schooling" => "Pós-Graduação",
                "schooling_level" => "Incompleto",
                "hiring_period_start" => "01/06/2020",
                "hiring_period_end" => "16/09/2020"
            ], (object)[
                "name" => "Assistant Manager",
                "description" => "Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
                "workload_start" => "10:00",
                "workload_end" => "17:00",
                "workload_pause" => "1h:30m",
                "schooling" => "Mestrado",
                "schooling_level" => "Completo",
                "hiring_period_start" => "05/06/2020",
                "hiring_period_end" => "04/09/2020"
            ], (object)[
                "name" => "Food Chemist",
                "description" => "Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.",
                "workload_start" => "08:00",
                "workload_end" => "19:00",
                "workload_pause" => "1h",
                "schooling" => "Superior",
                "schooling_level" => "Completo",
                "hiring_period_start" => "30/05/2020",
                "hiring_period_end" => "05/08/2020"
            ], (object)[
                "name" => "Account Representative I",
                "description" => "Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio.",
                "workload_start" => "09:00",
                "workload_end" => "19:00",
                "workload_pause" => "1h",
                "schooling" => "Médio",
                "schooling_level" => "Completo",
                "hiring_period_start" => "25/05/2020",
                "hiring_period_end" => "18/08/2020"
            ], (object)[
                "name" => "Pharmacist",
                "description" => "Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.",
                "workload_start" => "07:00",
                "workload_end" => "20:00",
                "workload_pause" => "1h:45m",
                "schooling" => "Médio",
                "schooling_level" => "Completo",
                "hiring_period_start" => "20/06/2020",
                "hiring_period_end" => "29/07/2020"
            ], (object)[
                "name" => "Pharmacist",
                "description" => "Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.",
                "workload_start" => "09:00",
                "workload_end" => "19:00",
                "workload_pause" => "1h",
                "schooling" => "Doutorado",
                "schooling_level" => "Incompleto",
                "hiring_period_start" => "19/07/2020",
                "hiring_period_end" => "16/09/2020"
            ], (object)[
                "name" => "Budget/Accounting Analyst II",
                "description" => "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
                "workload_start" => "07:00",
                "workload_end" => "17:00",
                "workload_pause" => "1h:45m",
                "schooling" => "Pós-Graduação",
                "schooling_level" => "Completo",
                "hiring_period_start" => "01/06/2020",
                "hiring_period_end" => "20/09/2020"
            ], (object)[
                "name" => "GIS Technical Architect",
                "description" => "Integer ac neque. Duis bibendum.",
                "workload_start" => "08:00",
                "workload_end" => "18:00",
                "workload_pause" => "1h:45m",
                "schooling" => "Doutorado",
                "schooling_level" => "Completo",
                "hiring_period_start" => "27/05/2020",
                "hiring_period_end" => "28/07/2020"
            ], (object)[
                "name" => "Nurse Practicioner",
                "description" => "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.",
                "workload_start" => "08:00",
                "workload_end" => "18:00",
                "workload_pause" => "1h",
                "schooling" => "Superior",
                "schooling_level" => "Incompleto",
                "hiring_period_start" => "29/05/2020",
                "hiring_period_end" => "19/08/2020"
            ], (object)[
                "name" => "Executive Secretary",
                "description" => "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
                "workload_start" => "08:00",
                "workload_end" => "17:00",
                "workload_pause" => "1h",
                "schooling" => "Doutorado",
                "schooling_level" => "Completo",
                "hiring_period_start" => "01/06/2020",
                "hiring_period_end" => "11/08/2020"
            ], (object)[
                "name" => "Teacher",
                "description" => "Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.",
                "workload_start" => "09:00",
                "workload_end" => "20:00",
                "workload_pause" => "1h:45m",
                "schooling" => "Mestrado",
                "schooling_level" => "Incompleto",
                "hiring_period_start" => "22/06/2020",
                "hiring_period_end" => "05/08/2020"
            ], (object)[
                "name" => "Occupational Therapist",
                "description" => "Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.",
                "workload_start" => "07:00",
                "workload_end" => "18:00",
                "workload_pause" => "1h:30m",
                "schooling" => "Superior",
                "schooling_level" => "Completo",
                "hiring_period_start" => "11/07/2020",
                "hiring_period_end" => "27/07/2020"
            ], (object)[
                "name" => "Senior Financial Analyst",
                "description" => "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
                "workload_start" => "07:00",
                "workload_end" => "20:00",
                "workload_pause" => "1h",
                "schooling" => "Superior",
                "schooling_level" => "Completo",
                "hiring_period_start" => "27/05/2020",
                "hiring_period_end" => "20/09/2020"
            ], (object)[
                "name" => "Software Engineer IV",
                "description" => "Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
                "workload_start" => "10:00",
                "workload_end" => "18:00",
                "workload_pause" => "1h",
                "schooling" => "Médio",
                "schooling_level" => "Completo",
                "hiring_period_start" => "27/05/2020",
                "hiring_period_end" => "13/09/2020"
            ], (object)[
                "name" => "Web Developer IV",
                "description" => "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
                "workload_start" => "08:00",
                "workload_end" => "20:00",
                "workload_pause" => "1h",
                "schooling" => "Mestrado",
                "schooling_level" => "Incompleto",
                "hiring_period_start" => "22/06/2020",
                "hiring_period_end" => "18/08/2020"
            ], (object)[
                "name" => "Programmer IV",
                "description" => "Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.",
                "workload_start" => "10:00",
                "workload_end" => "20:00",
                "workload_pause" => "1h:15m",
                "schooling" => "Mestrado",
                "schooling_level" => "Incompleto",
                "hiring_period_start" => "16/07/2020",
                "hiring_period_end" => "22/08/2020"
            ], (object)[
                "name" => "Budget/Accounting Analyst I",
                "description" => "Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
                "workload_start" => "10:00",
                "workload_end" => "18:00",
                "workload_pause" => "1h:45m",
                "schooling" => "Doutorado",
                "schooling_level" => "Incompleto",
                "hiring_period_start" => "17/06/2020",
                "hiring_period_end" => "02/08/2020"
            ], (object)[
                "name" => "Financial Advisor",
                "description" => "Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
                "workload_start" => "09:00",
                "workload_end" => "20:00",
                "workload_pause" => "1h:15m",
                "schooling" => "Mestrado",
                "schooling_level" => "Incompleto",
                "hiring_period_start" => "09/07/2020",
                "hiring_period_end" => "26/08/2020"
            ], (object)[
                "name" => "Environmental Tech",
                "description" => "Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.",
                "workload_start" => "10:00",
                "workload_end" => "18:00",
                "workload_pause" => "1h",
                "schooling" => "Doutorado",
                "schooling_level" => "Completo",
                "hiring_period_start" => "26/05/2020",
                "hiring_period_end" => "10/08/2020"
            ], (object)[
                "name" => "Occupational Therapist",
                "description" => "Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
                "workload_start" => "10:00",
                "workload_end" => "18:00",
                "workload_pause" => "1h:30m",
                "schooling" => "Mestrado",
                "schooling_level" => "Completo",
                "hiring_period_start" => "29/05/2020",
                "hiring_period_end" => "16/08/2020"
            ], (object)[
                "name" => "Electrical Engineer",
                "description" => "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum.",
                "workload_start" => "09:00",
                "workload_end" => "18:00",
                "workload_pause" => "1h:15m",
                "schooling" => "Mestrado",
                "schooling_level" => "Incompleto",
                "hiring_period_start" => "29/06/2020",
                "hiring_period_end" => "27/08/2020"
            ], (object)[
                "name" => "Clinical Specialist",
                "description" => "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum.",
                "workload_start" => "09:00",
                "workload_end" => "17:00",
                "workload_pause" => "1h:30m",
                "schooling" => "Médio",
                "schooling_level" => "Incompleto",
                "hiring_period_start" => "01/07/2020",
                "hiring_period_end" => "25/08/2020"
            ], (object)[
                "name" => "Safety Technician I",
                "description" => "Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
                "workload_start" => "09:00",
                "workload_end" => "20:00",
                "workload_pause" => "1h:15m",
                "schooling" => "Superior",
                "schooling_level" => "Incompleto",
                "hiring_period_start" => "25/05/2020",
                "hiring_period_end" => "05/08/2020"
            ], (object)[
                "name" => "Editor",
                "description" => "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
                "workload_start" => "07:00",
                "workload_end" => "20:00",
                "workload_pause" => "1h:45m",
                "schooling" => "Doutorado",
                "schooling_level" => "Incompleto",
                "hiring_period_start" => "09/07/2020",
                "hiring_period_end" => "19/09/2020"
            ], (object)[
                "name" => "Operator",
                "description" => "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.",
                "workload_start" => "07:00",
                "workload_end" => "18:00",
                "workload_pause" => "1h:30m",
                "schooling" => "Mestrado",
                "schooling_level" => "Incompleto",
                "hiring_period_start" => "04/06/2020",
                "hiring_period_end" => "25/07/2020"
            ], (object)[
                "name" => "Design Engineer",
                "description" => "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
                "workload_start" => "10:00",
                "workload_end" => "20:00",
                "workload_pause" => "1h",
                "schooling" => "Doutorado",
                "schooling_level" => "Incompleto",
                "hiring_period_start" => "03/06/2020",
                "hiring_period_end" => "06/09/2020"
            ], (object)[
                "name" => "Civil Engineer",
                "description" => "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.",
                "workload_start" => "09:00",
                "workload_end" => "19:00",
                "workload_pause" => "1h:30m",
                "schooling" => "Doutorado",
                "schooling_level" => "Incompleto",
                "hiring_period_start" => "14/07/2020",
                "hiring_period_end" => "25/07/2020"
            ], (object)[
                "name" => "Financial Analyst",
                "description" => "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
                "workload_start" => "09:00",
                "workload_end" => "18:00",
                "workload_pause" => "1h:15m",
                "schooling" => "Superior",
                "schooling_level" => "Completo",
                "hiring_period_start" => "16/07/2020",
                "hiring_period_end" => "14/09/2020"
            ], (object)[
                "name" => "Professor",
                "description" => "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.",
                "workload_start" => "09:00",
                "workload_end" => "20:00",
                "workload_pause" => "1h",
                "schooling" => "Pós-Graduação",
                "schooling_level" => "Incompleto",
                "hiring_period_start" => "06/06/2020",
                "hiring_period_end" => "30/08/2020"
            ], (object)[
                "name" => "VP Product Management",
                "description" => "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.",
                "workload_start" => "07:00",
                "workload_end" => "19:00",
                "workload_pause" => "1h:15m",
                "schooling" => "Pós-Graduação",
                "schooling_level" => "Completo",
                "hiring_period_start" => "03/06/2020",
                "hiring_period_end" => "04/08/2020"
            ], (object)[
                "name" => "Programmer III",
                "description" => "Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.",
                "workload_start" => "09:00",
                "workload_end" => "18:00",
                "workload_pause" => "1h:15m",
                "schooling" => "Doutorado",
                "schooling_level" => "Completo",
                "hiring_period_start" => "02/07/2020",
                "hiring_period_end" => "01/08/2020"
            ], (object)[
                "name" => "Research Associate",
                "description" => "Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
                "workload_start" => "07:00",
                "workload_end" => "19:00",
                "workload_pause" => "1h:15m",
                "schooling" => "Pós-Graduação",
                "schooling_level" => "Incompleto",
                "hiring_period_start" => "17/07/2020",
                "hiring_period_end" => "05/09/2020"
            ], (object)[
                "name" => "Assistant Media Planner",
                "description" => "Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.",
                "workload_start" => "10:00",
                "workload_end" => "19:00",
                "workload_pause" => "1h",
                "schooling" => "Mestrado",
                "schooling_level" => "Incompleto",
                "hiring_period_start" => "08/06/2020",
                "hiring_period_end" => "19/09/2020"
            ], (object)[
                "name" => "Health Coach III",
                "description" => "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
                "workload_start" => "07:00",
                "workload_end" => "18:00",
                "workload_pause" => "1h",
                "schooling" => "Mestrado",
                "schooling_level" => "Incompleto",
                "hiring_period_start" => "02/07/2020",
                "hiring_period_end" => "26/07/2020"
            ], (object)[
                "name" => "Marketing Manager",
                "description" => "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.",
                "workload_start" => "09:00",
                "workload_end" => "20:00",
                "workload_pause" => "1h",
                "schooling" => "Doutorado",
                "schooling_level" => "Incompleto",
                "hiring_period_start" => "01/07/2020",
                "hiring_period_end" => "16/09/2020"
            ], (object)[
                "name" => "VP Sales",
                "description" => "Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.",
                "workload_start" => "09:00",
                "workload_end" => "20:00",
                "workload_pause" => "1h:30m",
                "schooling" => "Médio",
                "schooling_level" => "Incompleto",
                "hiring_period_start" => "18/07/2020",
                "hiring_period_end" => "21/09/2020"
            ], (object)[
                "name" => "Quality Engineer",
                "description" => "Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
                "workload_start" => "08:00",
                "workload_end" => "17:00",
                "workload_pause" => "1h:30m",
                "schooling" => "Médio",
                "schooling_level" => "Incompleto",
                "hiring_period_start" => "16/07/2020",
                "hiring_period_end" => "08/09/2020"
            ], (object)[
                "name" => "Geologist II",
                "description" => "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.",
                "workload_start" => "10:00",
                "workload_end" => "17:00",
                "workload_pause" => "1h:30m",
                "schooling" => "Mestrado",
                "schooling_level" => "Completo",
                "hiring_period_start" => "05/07/2020",
                "hiring_period_end" => "21/08/2020"
            ], (object)[
                "name" => "Budget/Accounting Analyst I",
                "description" => "Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.",
                "workload_start" => "10:00",
                "workload_end" => "17:00",
                "workload_pause" => "1h:45m",
                "schooling" => "Mestrado",
                "schooling_level" => "Incompleto",
                "hiring_period_start" => "06/07/2020",
                "hiring_period_end" => "13/09/2020"
            ], (object)[
                "name" => "Cost Accountant",
                "description" => "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.",
                "workload_start" => "08:00",
                "workload_end" => "18:00",
                "workload_pause" => "1h:30m",
                "schooling" => "Superior",
                "schooling_level" => "Completo",
                "hiring_period_start" => "16/07/2020",
                "hiring_period_end" => "30/07/2020"
            ]
        ];

        foreach ($opportunities as $opportunity) {
            $jobOpportunity = JobOpportunity::create([
                'name' => $opportunity->name,
                'company_id' => Company::inRandomOrder()->first()->id,
                'description' => $opportunity->description,
                'workload' => 'Dàs '.$opportunity->workload_start.' às '.$opportunity->workload_end.', '.$opportunity->workload_pause.' de almoço',
                'hiring_period' => $opportunity->hiring_period_start.' - '.$opportunity->hiring_period_end,
                'schooling' => $opportunity->schooling.' - '.$opportunity->schooling_level,
            ]);
            $documentsCount = random_int(0, 3);
            while($documentsCount > 0) {
                $document = Document::inRandomOrder()->first();
                $documents = JobOpportunityDocument::where('document_id', $document->id)
                                ->where('job_opportunity_id', $jobOpportunity->id)
                                ->get();
                while(count($documents)){
                    $document = Document::inRandomOrder()->first();
                    $documents = JobOpportunityDocument::where('document_id', $document->id)
                                    ->where('job_opportunity_id', $jobOpportunity->id)
                                    ->get();
                }
                JobOpportunityDocument::create([
                    'document_id' => $document->id,
                    'job_opportunity_id' => $jobOpportunity->id
                ]);
                $documentsCount--;
            }
        }
    }
}
