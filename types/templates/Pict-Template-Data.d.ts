export = PictTemplateProviderData;
declare class PictTemplateProviderData {
    /**
     * @param {Object} pFable - The Fable Framework instance
     * @param {Object} pOptions - The options for the service
     * @param {String} pServiceHash - The hash of the service
     */
    constructor(pFable: any, pOptions: any, pServiceHash: string);
    render(pTemplateHash: any, pRecord: any, pContextArray: any): string;
}
//# sourceMappingURL=Pict-Template-Data.d.ts.map