export declare type DependentProperty = {
    property: string;
    request: number;
    targetPath?: string[];
};
export interface KalturaObjectMetadata {
    properties: {
        [key: string]: KalturaObjectPropertyMetadata;
    };
}
export interface KalturaObjectPropertyMetadata {
    readOnly?: boolean;
    type: string;
    subType?: string;
    default?: string;
    subTypeConstructor?: {
        new (): KalturaObjectBase;
    };
}
export interface KalturaObjectBaseArgs {
    relatedObjects?: KalturaObjectBase[];
}
export declare type KalturaObjectClass = {
    new (...args): KalturaObjectBase;
};
export declare const typesMappingStorage: {
    [key: string]: KalturaObjectClass;
};
export declare class KalturaObjectBaseFactory {
    static createObject(type: KalturaObjectBase): KalturaObjectBase;
    static createObject(typeName: string): KalturaObjectBase;
}
export declare abstract class KalturaObjectBase {
    private _allowedEmptyArray;
    private _dependentProperties;
    relatedObjects: KalturaObjectBase[];
    allowEmptyArray(...properties: string[]): this;
    setData(handler: (request: this) => void): this;
    constructor(data?: {});
    getTypeName(): string;
    protected _getMetadata(): KalturaObjectMetadata;
    hasMetadataProperty(propertyName: string): boolean;
    toRequestObject(): {};
    fromResponseObject(data: any): {};
    protected _parseResponseProperty(propertyName: string, property: KalturaObjectPropertyMetadata, source: any): any;
    private _isNumeric(n);
    private _createKalturaObject(objectType, fallbackObjectType?);
    private _createRequestPropertyValue(propertyName, property);
    setDependency(...dependency: (DependentProperty | [string, number] | [string, number, string])[]): this;
}
