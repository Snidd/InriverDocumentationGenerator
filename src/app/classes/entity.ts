import { FieldUtils } from './fieldUtils';
import { FieldType } from './fieldType';
import { LocaleString } from './localeString';
import * as xpath from 'xpath';

export class Entity {
    id:string;
    name:LocaleString;
    isLinkEntityType:boolean;
    fieldTypes:Array<FieldType>;

    constructor(entityDom:any) {

        const fieldUtils = new FieldUtils();

        this.id = fieldUtils.getString("Id/text()", entityDom);
        this.isLinkEntityType = fieldUtils.getBool("true", "IsLinkEntityType/text()", entityDom);
        this.name = new LocaleString("Name", entityDom);
        this.fieldTypes = [];

        const fieldTypes = xpath.select("FieldTypes/FieldType", entityDom);
        for (let i=0;i<fieldTypes.length;i++) {
            this.fieldTypes.push(new FieldType(fieldTypes[i]));
        }
    }
}