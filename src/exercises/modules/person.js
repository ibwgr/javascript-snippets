import {client} from "../solutions/modules/admin/Client";
'use strict';






export class person{

    // name;
    // vorname;

    constructor(name, vorname) {
        this._name = name;
        this._vorname = vorname;
    }


     get name() {
        return this._name;
    }

     get vorname() {
        return this._vorname;
    }



}

