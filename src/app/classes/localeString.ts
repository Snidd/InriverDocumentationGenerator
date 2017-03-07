import * as xpath from 'xpath';

export class LocaleString {
    languages:{ [languageCode: string]: string; }
    constructor(elementName:string, entityDom:any) {
        
        const languages = xpath.select("Name/string/value", entityDom);
        this.languages = {};

        for (let i=0;i<languages.length;i++) {
            const lang = languages[i];
            const languageKey = lang.getAttribute("language");            

            const children = lang.childNodes;

            this.languages[languageKey] = "";

            for (let y=0;y<lang.childNodes.length;y++) {
                const value = lang.childNodes[y].data.trim();
                this.languages[languageKey] += value;
            }
        }
    }
}