import SQLite from 'react-native-sqlite-2';

export const db = SQLite.openDatabase('calculator.db', '1.0', '', 1);

const install = () => {
    let createClientGroup = 'create table if not exists client_group(`id` integer primary key not null, `date` varchar(20))';
    let createClient = 'create table if not exists client(`id` integer primary key not null, `id_client_group` integer not null, `name` varchar(50))';

    db.transaction(function(_transaction) {
        //_transaction.executeSql(createClientGroup, []);
        //_transaction.executeSql(createClient, []);

        //_transaction.executeSql('insert into client_group(`date`) values ("2020-12-10")', [])
        //_transaction.executeSql('insert into client(`id_client_group`, `name`) values (1, "Quach Hoai Nam")', [])

        //_transaction.executeSql('select * from client_group', [], function(tx, res) {
        //    console.log(res.rows);
        //    for(let i = 0; i < res.rows.length; i++){

        //        console.log(res.rows.item(i));
        //        //this.setState({clientGroup: res.rows.item(i)})
        //    }
        //})
    })
}

const uninstall = () => {

}

const Setup = {
    install: install,
    uninstall: uninstall,
}

export default Setup;