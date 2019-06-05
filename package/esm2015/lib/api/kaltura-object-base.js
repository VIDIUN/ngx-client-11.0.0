/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { KalturaClientUtils } from "./kaltura-client-utils";
import { KalturaLogger } from './kaltura-logger';
/** @typedef {?} */
var DependentProperty;
export { DependentProperty };
/**
 * @record
 */
export function KalturaObjectMetadata() { }
/** @type {?} */
KalturaObjectMetadata.prototype.properties;
/**
 * @record
 */
export function KalturaObjectPropertyMetadata() { }
/** @type {?|undefined} */
KalturaObjectPropertyMetadata.prototype.readOnly;
/** @type {?} */
KalturaObjectPropertyMetadata.prototype.type;
/** @type {?|undefined} */
KalturaObjectPropertyMetadata.prototype.subType;
/** @type {?|undefined} */
KalturaObjectPropertyMetadata.prototype.default;
/** @type {?|undefined} */
KalturaObjectPropertyMetadata.prototype.subTypeConstructor;
;
/**
 * @record
 */
export function KalturaObjectBaseArgs() { }
/** @type {?|undefined} */
KalturaObjectBaseArgs.prototype.relatedObjects;
/** @type {?} */
const logger = new KalturaLogger('KalturaObjectBase');
/** @typedef {?} */
var KalturaObjectClass;
export { KalturaObjectClass };
/** @type {?} */
export const typesMappingStorage = {};
export class KalturaObjectBaseFactory {
    /**
     * @param {?} type
     * @return {?}
     */
    static createObject(type) {
        /** @type {?} */
        let typeName = '';
        if (type instanceof KalturaObjectBase) {
            typeName = type.getTypeName();
        }
        else if (typeof type === 'string') {
            typeName = type;
        }
        /** @type {?} */
        const factory = typeName ? typesMappingStorage[typeName] : null;
        return factory ? new factory() : null;
    }
}
/**
 * @abstract
 */
export class KalturaObjectBase {
    /**
     * @param {?=} data
     */
    constructor(data) {
        this._allowedEmptyArray = [];
        this._dependentProperties = {};
        if (data) {
            Object.assign(this, data);
        }
        if (typeof this.relatedObjects === 'undefined')
            this.relatedObjects = [];
    }
    /**
     * @param {...?} properties
     * @return {?}
     */
    allowEmptyArray(...properties) {
        /** @type {?} */
        const metadata = this._getMetadata().properties;
        for (const property of properties) {
            /** @type {?} */
            const metadataProperty = metadata[property];
            if (!metadataProperty) {
                logger.warn(`ignore property '${property}' flaged to allow empty array as it doesn't not exists on type (did you set the right property in method 'allowEmptyArray'?)`);
            }
            else if (metadataProperty.type !== 'a') {
                logger.warn(`ignore property '${property}' flaged to allow empty array as it is not of type array (did you set the right property in method 'allowEmptyArray'?)`);
            }
            else {
                this._allowedEmptyArray.push(property);
            }
        }
        return this;
    }
    /**
     * @param {?} handler
     * @return {?}
     */
    setData(handler) {
        if (handler) {
            handler(this);
        }
        return this;
    }
    /**
     * @return {?}
     */
    getTypeName() {
        return this._getMetadata().properties['objectType'].default;
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        // DEVELOPER NOTICE: according to the server schema, property 'relatedObjects' should have be of type 'KalturaListResponse'.
        // this is not an option as it created circle reference where KalturaListResponse > KalturaObjectBase > KalturaListResponse.
        // Hence, we cannot set the type explicitly and we need to expose the default type 'KalturaObjectBase'
        return { properties: {
                relatedObjects: { type: 'a', readOnly: true, subTypeConstructor: null, subType: 'KalturaListResponse' },
            } };
    }
    /**
     * @param {?} propertyName
     * @return {?}
     */
    hasMetadataProperty(propertyName) {
        return !!this._getMetadata().properties[propertyName];
    }
    /**
     * @return {?}
     */
    toRequestObject() {
        /** @type {?} */
        const metadata = this._getMetadata();
        /** @type {?} */
        let result = {};
        try {
            Object.keys(metadata.properties).forEach(propertyName => {
                /** @type {?} */
                const propertyData = metadata.properties[propertyName];
                /** @type {?} */
                const propertyValue = this._createRequestPropertyValue(propertyName, propertyData);
                switch (propertyValue.status) {
                    case "exists":
                        result[propertyName] = propertyValue.value;
                        break;
                    case "removed":
                        result[`${propertyName}__null`] = ''; // mark property for deletion
                        break;
                    case "missing":
                    default:
                        break;
                }
            });
        }
        catch (err) {
            // TODO [kaltura] should use logHandler
            logger.warn(err.message);
            throw err;
        }
        return result;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    fromResponseObject(data) {
        /** @type {?} */
        const metadata = this._getMetadata();
        /** @type {?} */
        let result = {};
        try {
            Object.keys(metadata.properties).forEach(propertyName => {
                /** @type {?} */
                const propertyData = metadata.properties[propertyName];
                /** @type {?} */
                const propertyValue = this._parseResponseProperty(propertyName, propertyData, data);
                if (propertyValue != null && typeof propertyValue !== 'undefined') {
                    this[propertyName] = propertyValue;
                }
            });
        }
        catch (err) {
            // TODO [kaltura] should use logHandler
            logger.warn(err.message);
            throw err;
        }
        return result;
    }
    /**
     * @param {?} propertyName
     * @param {?} property
     * @param {?} source
     * @return {?}
     */
    _parseResponseProperty(propertyName, property, source) {
        /** @type {?} */
        let result;
        /** @type {?} */
        let sourceValue = propertyName ? source[propertyName] : source;
        if (typeof sourceValue !== 'undefined') {
            if (sourceValue === null) {
                result = null;
            }
            else {
                switch (property.type) {
                    case 'b':
                        // boolean
                        if (typeof sourceValue === 'boolean') {
                            result = sourceValue;
                        }
                        else if (sourceValue + '' === '0') {
                            result = false;
                        }
                        else if (sourceValue + '' === '1') {
                            result = true;
                        }
                        break;
                    case 's':
                        // string
                        result = sourceValue + '';
                        break;
                    case 'n': // number
                    case 'en':
                        // enum of type number
                        result = sourceValue * 1;
                        break;
                    case 'es':
                        // enum of type number
                        result = typeof sourceValue !== 'undefined' && sourceValue !== null ? sourceValue.toString() : undefined;
                        break;
                    case 'o':
                        /** @type {?} */
                        const propertyObjectType = sourceValue['objectType'];
                        if (propertyObjectType) {
                            result = this._createKalturaObject(propertyObjectType, property.subType);
                            if (result) {
                                result.fromResponseObject(sourceValue);
                            }
                            else {
                                throw new Error(`Failed to create kaltura object of type '${source['objectType']}' (fallback type '${property.subType}')`);
                            }
                        }
                        else {
                            throw new Error(`Failed to create kaltura object for property '${propertyName}' (type '${property.subType}'). provided response object is missing property 'objectType'.`);
                        }
                        break;
                    case 'm':
                        /** @type {?} */
                        const parsedMap = {};
                        if (sourceValue instanceof Object) {
                            Object.keys(sourceValue).forEach(itemKey => {
                                /** @type {?} */
                                const itemValue = sourceValue[itemKey];
                                /** @type {?} */
                                const newItem = this._createKalturaObject(itemValue['objectType'], property.subType);
                                if (itemValue && newItem) {
                                    newItem.fromResponseObject(itemValue);
                                    parsedMap[itemKey] = newItem;
                                }
                                else {
                                    throw new Error(`Failed to create kaltura object for type '${property.subType}'`);
                                }
                            });
                            result = parsedMap;
                        }
                        else {
                            throw new Error(`failed to parse property '${propertyName}. Expected type object, got type '${typeof sourceValue}`);
                        }
                        break;
                    case 'a':
                        // array
                        if (sourceValue instanceof Array) {
                            /** @type {?} */
                            const parsedArray = [];
                            sourceValue.forEach(responseItem => {
                                /** @type {?} */
                                const newItem = this._createKalturaObject(responseItem['objectType'], property.subType);
                                if (newItem) {
                                    newItem.fromResponseObject(responseItem);
                                    parsedArray.push(newItem);
                                }
                                else {
                                    throw new Error(`Failed to create kaltura object for type '${responseItem['objectType']}' and for fallback type '${property.subType}'`);
                                }
                            });
                            result = parsedArray;
                        }
                        else {
                            throw new Error(`failed to parse property '${propertyName}. Expected type array, got type '${typeof sourceValue}`);
                        }
                        break;
                    case 'd':
                        // date
                        if (this._isNumeric(sourceValue)) {
                            result = KalturaClientUtils.fromServerDate(sourceValue * 1);
                        }
                        else {
                            throw new Error(`failed to parse property '${propertyName}. Expected type date, got type '${typeof sourceValue}`);
                        }
                        break;
                    default:
                        break;
                }
            }
        }
        return result;
    }
    /**
     * @param {?} n
     * @return {?}
     */
    _isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }
    /**
     * @param {?} objectType
     * @param {?=} fallbackObjectType
     * @return {?}
     */
    _createKalturaObject(objectType, fallbackObjectType) {
        /** @type {?} */
        let result = null;
        /** @type {?} */
        let usedFallbackType = false;
        if (objectType) {
            result = KalturaObjectBaseFactory.createObject(objectType);
        }
        if (!result && fallbackObjectType) {
            usedFallbackType = true;
            result = KalturaObjectBaseFactory.createObject(fallbackObjectType);
        }
        if (usedFallbackType && result) {
            logger.warn(`[kaltura-client]: Could not find object type '${objectType}', Falling back to '${fallbackObjectType}' object type. (Did you remember to set your accepted object types in the request “config.acceptedTypes” attribute?)`);
        }
        else if (!result) {
            logger.warn(`[kaltura-client]: Could not find object type '${objectType}'. (Did you remember to set your accepted object types in the request “config.acceptedTypes” attribute?)`);
        }
        return result;
    }
    /**
     * @param {?} propertyName
     * @param {?} property
     * @return {?}
     */
    _createRequestPropertyValue(propertyName, property) {
        /** @type {?} */
        let result = { status: 'missing' };
        if (property.type === 'c') {
            // constant string
            if (property.default) {
                result = { status: 'exists', value: property.default };
            }
        }
        else if (this._dependentProperties[propertyName]) {
            /** @type {?} */
            const dependentProperty = this._dependentProperties[propertyName];
            /** @type {?} */
            const resultValue = `{${dependentProperty.request}:result${dependentProperty.targetPath ? ':' + dependentProperty.targetPath : ''}}`;
            result = { status: 'exists', value: resultValue };
        }
        else if (!property.readOnly) {
            /** @type {?} */
            let value = this[propertyName];
            if (typeof value !== 'undefined') {
                if (value === null) {
                    result = { status: 'removed' };
                }
                else {
                    switch (property.type) {
                        case 'b':
                            // boolean
                            result = { status: 'exists', value: value };
                            break;
                        case 's':
                            // string
                            result = { status: 'exists', value: value + '' };
                            break;
                        case 'n': // number
                        case 'en':
                            // enum of type number
                            result = { status: 'exists', value: value * 1 };
                            break;
                        case 'o':
                            // object
                            if (value instanceof KalturaObjectBase) {
                                result = { status: 'exists', value: value.toRequestObject() };
                            }
                            else {
                                throw new Error(`failed to parse property. Expected '${propertyName} to be kaltura object`);
                            }
                            break;
                        case 'a':
                            // array
                            if (value instanceof Array) {
                                /** @type {?} */
                                const parsedArray = [];
                                value.forEach(item => {
                                    if (item instanceof KalturaObjectBase) {
                                        parsedArray.push(item.toRequestObject());
                                    }
                                });
                                /** @type {?} */
                                const allowEmptyArrayAsAValue = this._allowedEmptyArray.indexOf(propertyName) !== -1;
                                if (allowEmptyArrayAsAValue || parsedArray.length !== 0) {
                                    if (parsedArray.length === value.length) {
                                        result = { status: 'exists', value: parsedArray };
                                    }
                                    else {
                                        throw new Error(`failed to parse array. Expected all '${propertyName} items to be kaltura object`);
                                    }
                                }
                            }
                            else {
                                throw new Error(`failed to parse property. Expected '${propertyName} to be Array`);
                            }
                            break;
                        case 'm':
                            //map
                            if (value instanceof Object) {
                                /** @type {?} */
                                const valueKeys = Object.keys(value);
                                if (valueKeys.length > 0) {
                                    /** @type {?} */
                                    const parsedObject = {};
                                    valueKeys.forEach(itemKey => {
                                        /** @type {?} */
                                        var itemValue = value[itemKey];
                                        if (itemValue instanceof KalturaObjectBase) {
                                            parsedObject[itemKey] = itemValue.toRequestObject();
                                        }
                                    });
                                    if (valueKeys.length === Object.keys(parsedObject).length) {
                                        result = { status: 'exists', value: parsedObject };
                                    }
                                    else {
                                        throw new Error(`failed to parse map. Expected all '${propertyName} items to be kaltura object`);
                                    }
                                }
                            }
                            else {
                                throw new Error(`failed to parse property. Expected '${propertyName} to be kaltura object`);
                            }
                            break;
                        case 'd':
                            // date
                            if (value instanceof Date) {
                                result = { status: 'exists', value: KalturaClientUtils.toServerDate(value) };
                            }
                            else {
                                throw new Error(`failed to parse property. Expected '${propertyName} to be date`);
                            }
                            break;
                        case 'es':
                            // enum of type string
                            result = { status: 'exists', value: typeof value === 'string' ? value : undefined };
                            break;
                        case 'f':
                            if (value instanceof FormData) {
                                result = { status: 'exists', value: value };
                            }
                            break;
                        default:
                            // do nothing
                            break;
                    }
                }
            }
        }
        return result;
    }
    /**
     * @param {...?} dependency
     * @return {?}
     */
    setDependency(...dependency) {
        for (let i = 0, len = dependency.length; i < len; i++) {
            /** @type {?} */
            const item = dependency[i];
            let { property, request, targetPath } = /** @type {?} */ (item);
            if (item instanceof Array) {
                property = item[0];
                request = item[1];
                targetPath = item.length === 3 ? item[2] : null;
            }
            // The server expect one based index (meaning the first item has index 1)
            // since Javascript array are zero based index we expose the api as zero based
            // and transform the index value in the actual request by adding 1
            request = request + 1;
            this._dependentProperties[property] = { property, request, targetPath };
        }
        return this;
    }
}
if (false) {
    /** @type {?} */
    KalturaObjectBase.prototype._allowedEmptyArray;
    /** @type {?} */
    KalturaObjectBase.prototype._dependentProperties;
    /** @type {?} */
    KalturaObjectBase.prototype.relatedObjects;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2FsdHVyYS1vYmplY3QtYmFzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkva2FsdHVyYS1vYmplY3QtYmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQmhELENBQUM7Ozs7Ozs7O0FBT0YsTUFBTSxNQUFNLEdBQUcsSUFBSSxhQUFhLENBQUMsbUJBQW1CLENBQUMsQ0FBQzs7Ozs7QUFHdEQsYUFBYSxtQkFBbUIsR0FBNEMsRUFBRSxDQUFDO0FBRS9FLE1BQU07Ozs7O0lBR0osTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFVOztRQUU1QixJQUFJLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFFbEIsRUFBRSxDQUFDLENBQUMsSUFBSSxZQUFZLGlCQUFpQixDQUFDLENBQ3RDLENBQUM7WUFDQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQy9CO1FBQUEsSUFBSSxDQUFDLEVBQUUsQ0FBQSxDQUFDLE9BQU8sSUFBSSxLQUFLLFFBQVEsQ0FBQyxDQUNsQyxDQUFDO1lBQ0MsUUFBUSxHQUFHLElBQUksQ0FBQztTQUNqQjs7UUFFRCxNQUFNLE9BQU8sR0FBd0IsUUFBUSxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ3JGLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztLQUN2QztDQUNGOzs7O0FBRUQsTUFBTTs7OztJQThCSixZQUFZLElBQVU7a0NBNUJpQixFQUFFO29DQUM4QixFQUFFO1FBNkJ2RSxFQUFFLENBQUMs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QUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQzthQUNqRDs7OztZQUtELE9BQU8sR0FBRyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLFFBQVEsRUFBRyxPQUFPLEVBQUUsVUFBVSxFQUFFLENBQUM7U0FDMUU7UUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDO0tBQ2I7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEthbHR1cmFDbGllbnRVdGlscyB9IGZyb20gXCIuL2thbHR1cmEtY2xpZW50LXV0aWxzXCI7XG5pbXBvcnQgeyBLYWx0dXJhTG9nZ2VyIH0gZnJvbSAnLi9rYWx0dXJhLWxvZ2dlcic7XG5cbmV4cG9ydCB0eXBlIERlcGVuZGVudFByb3BlcnR5ID0geyBwcm9wZXJ0eSA6IHN0cmluZywgcmVxdWVzdCA6IG51bWJlciwgdGFyZ2V0UGF0aD8gOiBzdHJpbmdbXSB9O1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFPYmplY3RNZXRhZGF0YVxue1xuICBwcm9wZXJ0aWVzIDogeyBba2V5IDogc3RyaW5nXSA6IEthbHR1cmFPYmplY3RQcm9wZXJ0eU1ldGFkYXRhfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhT2JqZWN0UHJvcGVydHlNZXRhZGF0YVxue1xuICByZWFkT25seT8gOiBib29sZWFuO1xuICB0eXBlIDogc3RyaW5nO1xuICBzdWJUeXBlPyA6IHN0cmluZztcbiAgZGVmYXVsdD8gOiBzdHJpbmc7XG4gIHN1YlR5cGVDb25zdHJ1Y3Rvcj8gOiB7IG5ldygpIDogS2FsdHVyYU9iamVjdEJhc2UgfTtcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYU9iamVjdEJhc2VBcmdzXG57XG4gIHJlbGF0ZWRPYmplY3RzPyA6IEthbHR1cmFPYmplY3RCYXNlW107XG59XG5cbmNvbnN0IGxvZ2dlciA9IG5ldyBLYWx0dXJhTG9nZ2VyKCdLYWx0dXJhT2JqZWN0QmFzZScpO1xuXG5leHBvcnQgdHlwZSBLYWx0dXJhT2JqZWN0Q2xhc3MgPSB7IG5ldyguLi5hcmdzKSA6IEthbHR1cmFPYmplY3RCYXNlIH07XG5leHBvcnQgY29uc3QgdHlwZXNNYXBwaW5nU3RvcmFnZSA6IHsgW2tleSA6IHN0cmluZ10gOiBLYWx0dXJhT2JqZWN0Q2xhc3N9ID0ge307XG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhT2JqZWN0QmFzZUZhY3Rvcnkge1xuICBzdGF0aWMgY3JlYXRlT2JqZWN0KHR5cGU6IEthbHR1cmFPYmplY3RCYXNlKSA6IEthbHR1cmFPYmplY3RCYXNlO1xuICBzdGF0aWMgY3JlYXRlT2JqZWN0KHR5cGVOYW1lIDogc3RyaW5nKSA6IEthbHR1cmFPYmplY3RCYXNlO1xuICBzdGF0aWMgY3JlYXRlT2JqZWN0KHR5cGUgOiBhbnkpIDogS2FsdHVyYU9iamVjdEJhc2VcbiAge1xuICAgIGxldCB0eXBlTmFtZSA9ICcnO1xuXG4gICAgaWYgKHR5cGUgaW5zdGFuY2VvZiBLYWx0dXJhT2JqZWN0QmFzZSlcbiAgICB7XG4gICAgICB0eXBlTmFtZSA9IHR5cGUuZ2V0VHlwZU5hbWUoKTtcbiAgICB9ZWxzZSBpZih0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpXG4gICAge1xuICAgICAgdHlwZU5hbWUgPSB0eXBlO1xuICAgIH1cblxuICAgIGNvbnN0IGZhY3RvcnkgOiBLYWx0dXJhT2JqZWN0Q2xhc3MgPSB0eXBlTmFtZSA/IHR5cGVzTWFwcGluZ1N0b3JhZ2VbdHlwZU5hbWVdIDogbnVsbDtcbiAgICByZXR1cm4gZmFjdG9yeSA/IG5ldyBmYWN0b3J5KCkgOiBudWxsO1xuICB9XG59XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBLYWx0dXJhT2JqZWN0QmFzZSB7XG5cbiAgcHJpdmF0ZSBfYWxsb3dlZEVtcHR5QXJyYXk6IHN0cmluZ1tdID0gW107XG4gIHByaXZhdGUgX2RlcGVuZGVudFByb3BlcnRpZXMgOiB7IFtrZXkgOiBzdHJpbmddIDogRGVwZW5kZW50UHJvcGVydHl9ID0ge307XG4gIHJlbGF0ZWRPYmplY3RzIDogS2FsdHVyYU9iamVjdEJhc2VbXTsgLy8gc2VlIGRldmVsb3BlciBub3RpY2UgaW4gbWV0aG9kICdfZ2V0TWV0YWRhdGEoKSdcblxuXG4gIGFsbG93RW1wdHlBcnJheSguLi4gcHJvcGVydGllczogc3RyaW5nW10pOiB0aGlzIHtcbiAgICBjb25zdCBtZXRhZGF0YSA9IHRoaXMuX2dldE1ldGFkYXRhKCkucHJvcGVydGllcztcbiAgICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHByb3BlcnRpZXMpIHtcbiAgICAgIGNvbnN0IG1ldGFkYXRhUHJvcGVydHkgPSBtZXRhZGF0YVtwcm9wZXJ0eV07XG4gICAgICBpZiAoIW1ldGFkYXRhUHJvcGVydHkpIHtcbiAgICAgICAgbG9nZ2VyLndhcm4oYGlnbm9yZSBwcm9wZXJ0eSAnJHtwcm9wZXJ0eX0nIGZsYWdlZCB0byBhbGxvdyBlbXB0eSBhcnJheSBhcyBpdCBkb2Vzbid0IG5vdCBleGlzdHMgb24gdHlwZSAoZGlkIHlvdSBzZXQgdGhlIHJpZ2h0IHByb3BlcnR5IGluIG1ldGhvZCAnYWxsb3dFbXB0eUFycmF5Jz8pYCk7XG4gICAgICB9IGVsc2UgaWYgKG1ldGFkYXRhUHJvcGVydHkudHlwZSAhPT0gJ2EnKSB7XG4gICAgICAgIGxvZ2dlci53YXJuKGBpZ25vcmUgcHJvcGVydHkgJyR7cHJvcGVydHl9JyBmbGFnZWQgdG8gYWxsb3cgZW1wdHkgYXJyYXkgYXMgaXQgaXMgbm90IG9mIHR5cGUgYXJyYXkgKGRpZCB5b3Ugc2V0IHRoZSByaWdodCBwcm9wZXJ0eSBpbiBtZXRob2QgJ2FsbG93RW1wdHlBcnJheSc/KWApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fYWxsb3dlZEVtcHR5QXJyYXkucHVzaChwcm9wZXJ0eSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzZXREYXRhKGhhbmRsZXIgOiAocmVxdWVzdCA6ICB0aGlzKSA9PiB2b2lkKSA6ICB0aGlzIHtcbiAgICBpZiAoaGFuZGxlcikge1xuICAgICAgaGFuZGxlcih0aGlzKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihkYXRhPyA6IHt9KVxuICB7XG4gICAgaWYgKGRhdGEpXG4gICAge1xuICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkYXRhKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHRoaXMucmVsYXRlZE9iamVjdHMgPT09ICd1bmRlZmluZWQnKSB0aGlzLnJlbGF0ZWRPYmplY3RzID0gW107XG4gIH1cblxuICBwdWJsaWMgZ2V0VHlwZU5hbWUoKSA6IHN0cmluZ1xuICB7XG4gICAgcmV0dXJuIHRoaXMuX2dldE1ldGFkYXRhKCkucHJvcGVydGllc1snb2JqZWN0VHlwZSddLmRlZmF1bHQ7XG4gIH1cblxuICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAge1xuICAgIC8vIERFVkVMT1BFUiBOT1RJQ0U6IGFjY29yZGluZyB0byB0aGUgc2VydmVyIHNjaGVtYSwgcHJvcGVydHkgJ3JlbGF0ZWRPYmplY3RzJyBzaG91bGQgaGF2ZSBiZSBvZiB0eXBlICdLYWx0dXJhTGlzdFJlc3BvbnNlJy5cbiAgICAvLyB0aGlzIGlzIG5vdCBhbiBvcHRpb24gYXMgaXQgY3JlYXRlZCBjaXJjbGUgcmVmZXJlbmNlIHdoZXJlIEthbHR1cmFMaXN0UmVzcG9uc2UgPiBLYWx0dXJhT2JqZWN0QmFzZSA+IEthbHR1cmFMaXN0UmVzcG9uc2UuXG4gICAgLy8gSGVuY2UsIHdlIGNhbm5vdCBzZXQgdGhlIHR5cGUgZXhwbGljaXRseSBhbmQgd2UgbmVlZCB0byBleHBvc2UgdGhlIGRlZmF1bHQgdHlwZSAnS2FsdHVyYU9iamVjdEJhc2UnXG4gICAgcmV0dXJuIHsgcHJvcGVydGllcyA6IHtcbiAgICAgIHJlbGF0ZWRPYmplY3RzOiB7IHR5cGU6ICdhJywgcmVhZE9ubHk6IHRydWUsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IG51bGwsIHN1YlR5cGUgOiAnS2FsdHVyYUxpc3RSZXNwb25zZSd9LFxuICAgIH19O1xuICB9XG5cbiAgcHVibGljIGhhc01ldGFkYXRhUHJvcGVydHkocHJvcGVydHlOYW1lOiBzdHJpbmcpOiBib29sZWFuXG4gIHtcbiAgICByZXR1cm4gISF0aGlzLl9nZXRNZXRhZGF0YSgpLnByb3BlcnRpZXNbcHJvcGVydHlOYW1lXTtcbiAgfVxuXG4gIHRvUmVxdWVzdE9iamVjdCgpIDoge30ge1xuICAgIGNvbnN0IG1ldGFkYXRhID0gdGhpcy5fZ2V0TWV0YWRhdGEoKTtcbiAgICBsZXQgcmVzdWx0ID0ge307XG5cbiAgICB0cnkge1xuICAgICAgT2JqZWN0LmtleXMobWV0YWRhdGEucHJvcGVydGllcykuZm9yRWFjaChwcm9wZXJ0eU5hbWUgPT4ge1xuICAgICAgICBjb25zdCBwcm9wZXJ0eURhdGEgID0gbWV0YWRhdGEucHJvcGVydGllc1twcm9wZXJ0eU5hbWVdO1xuICAgICAgICBjb25zdCBwcm9wZXJ0eVZhbHVlID0gdGhpcy5fY3JlYXRlUmVxdWVzdFByb3BlcnR5VmFsdWUocHJvcGVydHlOYW1lLCBwcm9wZXJ0eURhdGEpO1xuXG4gICAgICAgIHN3aXRjaCAocHJvcGVydHlWYWx1ZS5zdGF0dXMpXG4gICAgICAgIHtcbiAgICAgICAgICBjYXNlIFwiZXhpc3RzXCI6XG4gICAgICAgICAgICByZXN1bHRbcHJvcGVydHlOYW1lXSA9IHByb3BlcnR5VmFsdWUudmFsdWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwicmVtb3ZlZFwiOlxuICAgICAgICAgICAgcmVzdWx0W2Ake3Byb3BlcnR5TmFtZX1fX251bGxgXSA9ICcnOyAvLyBtYXJrIHByb3BlcnR5IGZvciBkZWxldGlvblxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcIm1pc3NpbmdcIjpcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1jYXRjaChlcnIpXG4gICAge1xuICAgICAgLy8gVE9ETyBba2FsdHVyYV0gc2hvdWxkIHVzZSBsb2dIYW5kbGVyXG4gICAgICBsb2dnZXIud2FybihlcnIubWVzc2FnZSk7XG4gICAgICB0aHJvdyBlcnI7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGZyb21SZXNwb25zZU9iamVjdChkYXRhIDogYW55KSA6IHt9IHtcbiAgICBjb25zdCBtZXRhZGF0YSA9IHRoaXMuX2dldE1ldGFkYXRhKCk7XG4gICAgbGV0IHJlc3VsdCA9IHt9O1xuXG4gICAgdHJ5IHtcbiAgICAgIE9iamVjdC5rZXlzKG1ldGFkYXRhLnByb3BlcnRpZXMpLmZvckVhY2gocHJvcGVydHlOYW1lID0+IHtcbiAgICAgICAgY29uc3QgcHJvcGVydHlEYXRhID0gbWV0YWRhdGEucHJvcGVydGllc1twcm9wZXJ0eU5hbWVdO1xuICAgICAgICBjb25zdCBwcm9wZXJ0eVZhbHVlID0gdGhpcy5fcGFyc2VSZXNwb25zZVByb3BlcnR5KHByb3BlcnR5TmFtZSwgcHJvcGVydHlEYXRhLCBkYXRhKTtcblxuICAgICAgICBpZiAocHJvcGVydHlWYWx1ZSAhPSBudWxsICYmIHR5cGVvZiBwcm9wZXJ0eVZhbHVlICE9PSAndW5kZWZpbmVkJylcbiAgICAgICAge1xuICAgICAgICAgIHRoaXNbcHJvcGVydHlOYW1lXSA9IHByb3BlcnR5VmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1jYXRjaChlcnIpXG4gICAge1xuICAgICAgLy8gVE9ETyBba2FsdHVyYV0gc2hvdWxkIHVzZSBsb2dIYW5kbGVyXG4gICAgICBsb2dnZXIud2FybihlcnIubWVzc2FnZSk7XG4gICAgICB0aHJvdyBlcnI7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG5cblxuICBwcm90ZWN0ZWQgX3BhcnNlUmVzcG9uc2VQcm9wZXJ0eShwcm9wZXJ0eU5hbWUgOiBzdHJpbmcsIHByb3BlcnR5IDogS2FsdHVyYU9iamVjdFByb3BlcnR5TWV0YWRhdGEsIHNvdXJjZSA6IGFueSkgOiBhbnkge1xuXG4gICAgbGV0IHJlc3VsdDtcbiAgICBsZXQgc291cmNlVmFsdWUgPSBwcm9wZXJ0eU5hbWUgPyBzb3VyY2VbcHJvcGVydHlOYW1lXSA6IHNvdXJjZTtcblxuICAgIGlmICh0eXBlb2Ygc291cmNlVmFsdWUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBpZiAoc291cmNlVmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgcmVzdWx0ID0gbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN3aXRjaCAocHJvcGVydHkudHlwZSkge1xuICAgICAgICAgIGNhc2UgJ2InOiAvLyBib29sZWFuXG4gICAgICAgICAgICBpZiAodHlwZW9mIHNvdXJjZVZhbHVlID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAgICAgcmVzdWx0ID0gc291cmNlVmFsdWU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNvdXJjZVZhbHVlICsgJycgPT09ICcwJykge1xuICAgICAgICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc291cmNlVmFsdWUgKyAnJyA9PT0gJzEnKSB7XG4gICAgICAgICAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdzJzogLy8gc3RyaW5nXG4gICAgICAgICAgICByZXN1bHQgPSBzb3VyY2VWYWx1ZSArICcnO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnbic6IC8vIG51bWJlclxuICAgICAgICAgIGNhc2UgJ2VuJzogLy8gZW51bSBvZiB0eXBlIG51bWJlclxuICAgICAgICAgICAgcmVzdWx0ID0gc291cmNlVmFsdWUgKiAxO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnZXMnOiAvLyBlbnVtIG9mIHR5cGUgbnVtYmVyXG4gICAgICAgICAgICByZXN1bHQgPSB0eXBlb2Ygc291cmNlVmFsdWUgIT09ICd1bmRlZmluZWQnICYmIHNvdXJjZVZhbHVlICE9PSBudWxsID8gc291cmNlVmFsdWUudG9TdHJpbmcoKSA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ28nOiAvLyBvYmplY3RcbiAgICAgICAgICAgIGNvbnN0IHByb3BlcnR5T2JqZWN0VHlwZSA9IHNvdXJjZVZhbHVlWydvYmplY3RUeXBlJ107XG5cbiAgICAgICAgICAgIGlmIChwcm9wZXJ0eU9iamVjdFR5cGUpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuX2NyZWF0ZUthbHR1cmFPYmplY3QocHJvcGVydHlPYmplY3RUeXBlLCBwcm9wZXJ0eS5zdWJUeXBlKTtcblxuICAgICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LmZyb21SZXNwb25zZU9iamVjdChzb3VyY2VWYWx1ZSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gY3JlYXRlIGthbHR1cmEgb2JqZWN0IG9mIHR5cGUgJyR7c291cmNlWydvYmplY3RUeXBlJ119JyAoZmFsbGJhY2sgdHlwZSAnJHtwcm9wZXJ0eS5zdWJUeXBlfScpYCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1lbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGNyZWF0ZSBrYWx0dXJhIG9iamVjdCBmb3IgcHJvcGVydHkgJyR7cHJvcGVydHlOYW1lfScgKHR5cGUgJyR7cHJvcGVydHkuc3ViVHlwZX0nKS4gcHJvdmlkZWQgcmVzcG9uc2Ugb2JqZWN0IGlzIG1pc3NpbmcgcHJvcGVydHkgJ29iamVjdFR5cGUnLmApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdtJzogLy8gbWFwXG4gICAgICAgICAgICBjb25zdCBwYXJzZWRNYXAgPSB7fTtcbiAgICAgICAgICAgIGlmIChzb3VyY2VWYWx1ZSBpbnN0YW5jZW9mIE9iamVjdCkge1xuICAgICAgICAgICAgICBPYmplY3Qua2V5cyhzb3VyY2VWYWx1ZSkuZm9yRWFjaChpdGVtS2V5ID0+XG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtVmFsdWUgPSBzb3VyY2VWYWx1ZVtpdGVtS2V5XTtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdJdGVtID0gIHRoaXMuX2NyZWF0ZUthbHR1cmFPYmplY3QoaXRlbVZhbHVlWydvYmplY3RUeXBlJ10sIHByb3BlcnR5LnN1YlR5cGUpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW1WYWx1ZSAmJiBuZXdJdGVtKSB7XG4gICAgICAgICAgICAgICAgICBuZXdJdGVtLmZyb21SZXNwb25zZU9iamVjdChpdGVtVmFsdWUpO1xuICAgICAgICAgICAgICAgICAgcGFyc2VkTWFwW2l0ZW1LZXldID0gbmV3SXRlbTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gY3JlYXRlIGthbHR1cmEgb2JqZWN0IGZvciB0eXBlICcke3Byb3BlcnR5LnN1YlR5cGV9J2ApO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICByZXN1bHQgPSBwYXJzZWRNYXA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYGZhaWxlZCB0byBwYXJzZSBwcm9wZXJ0eSAnJHtwcm9wZXJ0eU5hbWV9LiBFeHBlY3RlZCB0eXBlIG9iamVjdCwgZ290IHR5cGUgJyR7dHlwZW9mIHNvdXJjZVZhbHVlfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnYSc6IC8vIGFycmF5XG4gICAgICAgICAgICBpZiAoc291cmNlVmFsdWUgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgICBjb25zdCBwYXJzZWRBcnJheSA9IFtdO1xuICAgICAgICAgICAgICBzb3VyY2VWYWx1ZS5mb3JFYWNoKHJlc3BvbnNlSXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3SXRlbSA9IHRoaXMuX2NyZWF0ZUthbHR1cmFPYmplY3QocmVzcG9uc2VJdGVtWydvYmplY3RUeXBlJ10sIHByb3BlcnR5LnN1YlR5cGUpO1xuXG4gICAgICAgICAgICAgICAgaWYgKG5ld0l0ZW0pIHtcbiAgICAgICAgICAgICAgICAgIG5ld0l0ZW0uZnJvbVJlc3BvbnNlT2JqZWN0KHJlc3BvbnNlSXRlbSk7XG4gICAgICAgICAgICAgICAgICBwYXJzZWRBcnJheS5wdXNoKG5ld0l0ZW0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBjcmVhdGUga2FsdHVyYSBvYmplY3QgZm9yIHR5cGUgJyR7cmVzcG9uc2VJdGVtWydvYmplY3RUeXBlJ119JyBhbmQgZm9yIGZhbGxiYWNrIHR5cGUgJyR7cHJvcGVydHkuc3ViVHlwZX0nYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICByZXN1bHQgPSBwYXJzZWRBcnJheTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgZmFpbGVkIHRvIHBhcnNlIHByb3BlcnR5ICcke3Byb3BlcnR5TmFtZX0uIEV4cGVjdGVkIHR5cGUgYXJyYXksIGdvdCB0eXBlICcke3R5cGVvZiBzb3VyY2VWYWx1ZX1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2QnOiAvLyBkYXRlXG4gICAgICAgICAgICBpZiAodGhpcy5faXNOdW1lcmljKHNvdXJjZVZhbHVlKSkge1xuICAgICAgICAgICAgICByZXN1bHQgPSBLYWx0dXJhQ2xpZW50VXRpbHMuZnJvbVNlcnZlckRhdGUoc291cmNlVmFsdWUqMSlcbiAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBmYWlsZWQgdG8gcGFyc2UgcHJvcGVydHkgJyR7cHJvcGVydHlOYW1lfS4gRXhwZWN0ZWQgdHlwZSBkYXRlLCBnb3QgdHlwZSAnJHt0eXBlb2Ygc291cmNlVmFsdWV9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBwcml2YXRlIF9pc051bWVyaWMobiA6IGFueSkgOiBib29sZWFuIHtcbiAgICByZXR1cm4gIWlzTmFOKHBhcnNlRmxvYXQobikpICYmIGlzRmluaXRlKG4pO1xuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlS2FsdHVyYU9iamVjdChvYmplY3RUeXBlIDogc3RyaW5nLCBmYWxsYmFja09iamVjdFR5cGU/IDogc3RyaW5nKSA6IEthbHR1cmFPYmplY3RCYXNlXG4gIHtcbiAgICBsZXQgcmVzdWx0ID0gbnVsbDtcbiAgICBsZXQgdXNlZEZhbGxiYWNrVHlwZSA9IGZhbHNlO1xuICAgIGlmIChvYmplY3RUeXBlKVxuICAgIHtcbiAgICAgIHJlc3VsdCA9IEthbHR1cmFPYmplY3RCYXNlRmFjdG9yeS5jcmVhdGVPYmplY3Qob2JqZWN0VHlwZSk7XG4gICAgfVxuXG4gICAgaWYgKCFyZXN1bHQgJiYgZmFsbGJhY2tPYmplY3RUeXBlKVxuICAgIHtcbiAgICAgIHVzZWRGYWxsYmFja1R5cGUgPSB0cnVlO1xuICAgICAgcmVzdWx0ID0gS2FsdHVyYU9iamVjdEJhc2VGYWN0b3J5LmNyZWF0ZU9iamVjdChmYWxsYmFja09iamVjdFR5cGUpO1xuICAgIH1cblxuICAgIGlmICh1c2VkRmFsbGJhY2tUeXBlICYmIHJlc3VsdClcbiAgICB7XG4gICAgICBsb2dnZXIud2FybihgW2thbHR1cmEtY2xpZW50XTogQ291bGQgbm90IGZpbmQgb2JqZWN0IHR5cGUgJyR7b2JqZWN0VHlwZX0nLCBGYWxsaW5nIGJhY2sgdG8gJyR7ZmFsbGJhY2tPYmplY3RUeXBlfScgb2JqZWN0IHR5cGUuIChEaWQgeW91IHJlbWVtYmVyIHRvIHNldCB5b3VyIGFjY2VwdGVkIG9iamVjdCB0eXBlcyBpbiB0aGUgcmVxdWVzdCDigJxjb25maWcuYWNjZXB0ZWRUeXBlc+KAnSBhdHRyaWJ1dGU/KWApO1xuICAgIH1lbHNlIGlmICghcmVzdWx0KVxuICAgIHtcbiAgICAgIGxvZ2dlci53YXJuKGBba2FsdHVyYS1jbGllbnRdOiBDb3VsZCBub3QgZmluZCBvYmplY3QgdHlwZSAnJHtvYmplY3RUeXBlfScuIChEaWQgeW91IHJlbWVtYmVyIHRvIHNldCB5b3VyIGFjY2VwdGVkIG9iamVjdCB0eXBlcyBpbiB0aGUgcmVxdWVzdCDigJxjb25maWcuYWNjZXB0ZWRUeXBlc+KAnSBhdHRyaWJ1dGU/KWApO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVSZXF1ZXN0UHJvcGVydHlWYWx1ZShwcm9wZXJ0eU5hbWUgOiBzdHJpbmcsIHByb3BlcnR5IDogS2FsdHVyYU9iamVjdFByb3BlcnR5TWV0YWRhdGEpIDogeyBzdGF0dXMgOiAnbWlzc2luZycgfCAncmVtb3ZlZCcgfCAnZXhpc3RzJywgdmFsdWU/IDogYW55IH0ge1xuXG4gICAgbGV0IHJlc3VsdCA6IHsgc3RhdHVzIDogJ21pc3NpbmcnIHwgJ3JlbW92ZWQnIHwgJ2V4aXN0cycsIHZhbHVlPyA6IGFueSB9ID0geyBzdGF0dXMgOiAnbWlzc2luZyd9O1xuXG4gICAgaWYgKHByb3BlcnR5LnR5cGUgPT09ICdjJylcbiAgICB7XG4gICAgICAvLyBjb25zdGFudCBzdHJpbmdcbiAgICAgIGlmIChwcm9wZXJ0eS5kZWZhdWx0KVxuICAgICAge1xuICAgICAgICByZXN1bHQgPSB7IHN0YXR1cyA6ICdleGlzdHMnLCB2YWx1ZSA6IHByb3BlcnR5LmRlZmF1bHR9O1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5fZGVwZW5kZW50UHJvcGVydGllc1twcm9wZXJ0eU5hbWVdKVxuICAgIHtcbiAgICAgIGNvbnN0IGRlcGVuZGVudFByb3BlcnR5ID0gdGhpcy5fZGVwZW5kZW50UHJvcGVydGllc1twcm9wZXJ0eU5hbWVdO1xuICAgICAgY29uc3QgcmVzdWx0VmFsdWUgPSBgeyR7ZGVwZW5kZW50UHJvcGVydHkucmVxdWVzdH06cmVzdWx0JHtkZXBlbmRlbnRQcm9wZXJ0eS50YXJnZXRQYXRoID8gJzonICsgZGVwZW5kZW50UHJvcGVydHkudGFyZ2V0UGF0aCA6ICcnfX1gO1xuICAgICAgcmVzdWx0ID0geyBzdGF0dXMgOiAnZXhpc3RzJywgdmFsdWUgOiByZXN1bHRWYWx1ZX07XG4gICAgfVxuICAgIGVsc2UgaWYgKCFwcm9wZXJ0eS5yZWFkT25seSkge1xuICAgICAgbGV0IHZhbHVlID0gdGhpc1twcm9wZXJ0eU5hbWVdO1xuXG4gICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICByZXN1bHQgPSB7IHN0YXR1cyA6ICdyZW1vdmVkJ307XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3dpdGNoIChwcm9wZXJ0eS50eXBlKSB7XG4gICAgICAgICAgICBjYXNlICdiJzogLy8gYm9vbGVhblxuICAgICAgICAgICAgICByZXN1bHQgPSB7IHN0YXR1cyA6ICdleGlzdHMnLCB2YWx1ZSA6IHZhbHVlfTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdzJzogLy8gc3RyaW5nXG4gICAgICAgICAgICAgIHJlc3VsdCA9IHsgc3RhdHVzIDogJ2V4aXN0cycsIHZhbHVlIDogdmFsdWUgKyAnJ307XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnbic6IC8vIG51bWJlclxuICAgICAgICAgICAgY2FzZSAnZW4nOiAvLyBlbnVtIG9mIHR5cGUgbnVtYmVyXG4gICAgICAgICAgICAgIHJlc3VsdCA9IHsgc3RhdHVzIDogJ2V4aXN0cycsIHZhbHVlIDogdmFsdWUgKiAxfTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdvJzogLy8gb2JqZWN0XG4gICAgICAgICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEthbHR1cmFPYmplY3RCYXNlKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0geyBzdGF0dXMgOiAnZXhpc3RzJywgdmFsdWUgOiB2YWx1ZS50b1JlcXVlc3RPYmplY3QoKX07XG4gICAgICAgICAgICAgIH1lbHNlXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYGZhaWxlZCB0byBwYXJzZSBwcm9wZXJ0eS4gRXhwZWN0ZWQgJyR7cHJvcGVydHlOYW1lfSB0byBiZSBrYWx0dXJhIG9iamVjdGApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnYSc6IC8vIGFycmF5XG4gICAgICAgICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFyc2VkQXJyYXkgPSBbXTtcbiAgICAgICAgICAgICAgICB2YWx1ZS5mb3JFYWNoKGl0ZW0gPT5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBpZiAoaXRlbSBpbnN0YW5jZW9mIEthbHR1cmFPYmplY3RCYXNlKVxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBwYXJzZWRBcnJheS5wdXNoKGl0ZW0udG9SZXF1ZXN0T2JqZWN0KCkpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgYWxsb3dFbXB0eUFycmF5QXNBVmFsdWUgPSB0aGlzLl9hbGxvd2VkRW1wdHlBcnJheS5pbmRleE9mKHByb3BlcnR5TmFtZSkgIT09IC0xO1xuICAgICAgICAgICAgICAgIGlmIChhbGxvd0VtcHR5QXJyYXlBc0FWYWx1ZSB8fCBwYXJzZWRBcnJheS5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgICAgICAgIGlmIChwYXJzZWRBcnJheS5sZW5ndGggPT09IHZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB7c3RhdHVzOiAnZXhpc3RzJywgdmFsdWU6IHBhcnNlZEFycmF5fTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgZmFpbGVkIHRvIHBhcnNlIGFycmF5LiBFeHBlY3RlZCBhbGwgJyR7cHJvcGVydHlOYW1lfSBpdGVtcyB0byBiZSBrYWx0dXJhIG9iamVjdGApO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfWVsc2VcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgZmFpbGVkIHRvIHBhcnNlIHByb3BlcnR5LiBFeHBlY3RlZCAnJHtwcm9wZXJ0eU5hbWV9IHRvIGJlIEFycmF5YCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdtJzogLy9tYXBcbiAgICAgICAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgT2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWVLZXlzID0gT2JqZWN0LmtleXModmFsdWUpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlS2V5cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBwYXJzZWRPYmplY3QgPSB7fTtcbiAgICAgICAgICAgICAgICAgIHZhbHVlS2V5cy5mb3JFYWNoKGl0ZW1LZXkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaXRlbVZhbHVlID0gdmFsdWVbaXRlbUtleV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtVmFsdWUgaW5zdGFuY2VvZiBLYWx0dXJhT2JqZWN0QmFzZSkge1xuICAgICAgICAgICAgICAgICAgICAgIHBhcnNlZE9iamVjdFtpdGVtS2V5XSA9IGl0ZW1WYWx1ZS50b1JlcXVlc3RPYmplY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlS2V5cy5sZW5ndGggPT09IE9iamVjdC5rZXlzKHBhcnNlZE9iamVjdCkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHtzdGF0dXM6ICdleGlzdHMnLCB2YWx1ZTogcGFyc2VkT2JqZWN0fTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgZmFpbGVkIHRvIHBhcnNlIG1hcC4gRXhwZWN0ZWQgYWxsICcke3Byb3BlcnR5TmFtZX0gaXRlbXMgdG8gYmUga2FsdHVyYSBvYmplY3RgKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1lbHNlXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYGZhaWxlZCB0byBwYXJzZSBwcm9wZXJ0eS4gRXhwZWN0ZWQgJyR7cHJvcGVydHlOYW1lfSB0byBiZSBrYWx0dXJhIG9iamVjdGApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZCc6IC8vIGRhdGVcbiAgICAgICAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHsgc3RhdHVzIDogJ2V4aXN0cycsIHZhbHVlIDogS2FsdHVyYUNsaWVudFV0aWxzLnRvU2VydmVyRGF0ZSh2YWx1ZSl9O1xuICAgICAgICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBmYWlsZWQgdG8gcGFyc2UgcHJvcGVydHkuIEV4cGVjdGVkICcke3Byb3BlcnR5TmFtZX0gdG8gYmUgZGF0ZWApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZXMnOiAvLyBlbnVtIG9mIHR5cGUgc3RyaW5nXG4gICAgICAgICAgICAgIHJlc3VsdCA9IHsgc3RhdHVzIDogJ2V4aXN0cycsIHZhbHVlIDogdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyA/IHZhbHVlIDogdW5kZWZpbmVkfTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdmJzpcbiAgICAgICAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgRm9ybURhdGEpXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB7c3RhdHVzIDogJ2V4aXN0cycsIHZhbHVlIDogdmFsdWV9O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgLy8gZG8gbm90aGluZ1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgc2V0RGVwZW5kZW5jeSguLi5kZXBlbmRlbmN5IDogKERlcGVuZGVudFByb3BlcnR5IHwgW3N0cmluZywgbnVtYmVyXSB8IFtzdHJpbmcsIG51bWJlcixzdHJpbmddKVtdKSA6IHRoaXNcbiAge1xuICAgIGZvcihsZXQgaSA9IDAsIGxlbiA9IGRlcGVuZGVuY3kubGVuZ3RoO2k8bGVuO2krKylcbiAgICB7XG4gICAgICBjb25zdCBpdGVtID0gZGVwZW5kZW5jeVtpXTtcbiAgICAgIGxldCB7IHByb3BlcnR5LCByZXF1ZXN0LCB0YXJnZXRQYXRoIH0gPSA8YW55Pml0ZW07XG4gICAgICBpZiAoaXRlbSBpbnN0YW5jZW9mIEFycmF5KVxuICAgICAge1xuICAgICAgICBwcm9wZXJ0eSA9IGl0ZW1bMF07XG4gICAgICAgIHJlcXVlc3QgPSBpdGVtWzFdO1xuICAgICAgICB0YXJnZXRQYXRoID0gaXRlbS5sZW5ndGggPT09IDMgPyBpdGVtWzJdIDogbnVsbDtcbiAgICAgIH1cblxuICAgICAgLy8gVGhlIHNlcnZlciBleHBlY3Qgb25lIGJhc2VkIGluZGV4IChtZWFuaW5nIHRoZSBmaXJzdCBpdGVtIGhhcyBpbmRleCAxKVxuICAgICAgLy8gc2luY2UgSmF2YXNjcmlwdCBhcnJheSBhcmUgemVybyBiYXNlZCBpbmRleCB3ZSBleHBvc2UgdGhlIGFwaSBhcyB6ZXJvIGJhc2VkXG4gICAgICAvLyBhbmQgdHJhbnNmb3JtIHRoZSBpbmRleCB2YWx1ZSBpbiB0aGUgYWN0dWFsIHJlcXVlc3QgYnkgYWRkaW5nIDFcbiAgICAgIHJlcXVlc3QgPSByZXF1ZXN0ICsgMTtcbiAgICAgIHRoaXMuX2RlcGVuZGVudFByb3BlcnRpZXNbcHJvcGVydHldID0geyBwcm9wZXJ0eSAsIHJlcXVlc3QsIHRhcmdldFBhdGggfTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuIl19