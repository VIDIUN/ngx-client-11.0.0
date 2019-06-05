/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var logger = new KalturaLogger('KalturaObjectBase');
/** @typedef {?} */
var KalturaObjectClass;
export { KalturaObjectClass };
/** @type {?} */
export var typesMappingStorage = {};
var KalturaObjectBaseFactory = /** @class */ (function () {
    function KalturaObjectBaseFactory() {
    }
    /**
     * @param {?} type
     * @return {?}
     */
    KalturaObjectBaseFactory.createObject = /**
     * @param {?} type
     * @return {?}
     */
    function (type) {
        /** @type {?} */
        var typeName = '';
        if (type instanceof KalturaObjectBase) {
            typeName = type.getTypeName();
        }
        else if (typeof type === 'string') {
            typeName = type;
        }
        /** @type {?} */
        var factory = typeName ? typesMappingStorage[typeName] : null;
        return factory ? new factory() : null;
    };
    return KalturaObjectBaseFactory;
}());
export { KalturaObjectBaseFactory };
/**
 * @abstract
 */
var /**
 * @abstract
 */
KalturaObjectBase = /** @class */ (function () {
    function KalturaObjectBase(data) {
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
    KalturaObjectBase.prototype.allowEmptyArray = /**
     * @param {...?} properties
     * @return {?}
     */
    function () {
        var properties = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            properties[_i] = arguments[_i];
        }
        /** @type {?} */
        var metadata = this._getMetadata().properties;
        try {
            for (var properties_1 = tslib_1.__values(properties), properties_1_1 = properties_1.next(); !properties_1_1.done; properties_1_1 = properties_1.next()) {
                var property = properties_1_1.value;
                /** @type {?} */
                var metadataProperty = metadata[property];
                if (!metadataProperty) {
                    logger.warn("ignore property '" + property + "' flaged to allow empty array as it doesn't not exists on type (did you set the right property in method 'allowEmptyArray'?)");
                }
                else if (metadataProperty.type !== 'a') {
                    logger.warn("ignore property '" + property + "' flaged to allow empty array as it is not of type array (did you set the right property in method 'allowEmptyArray'?)");
                }
                else {
                    this._allowedEmptyArray.push(property);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (properties_1_1 && !properties_1_1.done && (_a = properties_1.return)) _a.call(properties_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return this;
        var e_1, _a;
    };
    /**
     * @param {?} handler
     * @return {?}
     */
    KalturaObjectBase.prototype.setData = /**
     * @param {?} handler
     * @return {?}
     */
    function (handler) {
        if (handler) {
            handler(this);
        }
        return this;
    };
    /**
     * @return {?}
     */
    KalturaObjectBase.prototype.getTypeName = /**
     * @return {?}
     */
    function () {
        return this._getMetadata().properties['objectType'].default;
    };
    /**
     * @return {?}
     */
    KalturaObjectBase.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        // DEVELOPER NOTICE: according to the server schema, property 'relatedObjects' should have be of type 'KalturaListResponse'.
        // this is not an option as it created circle reference where KalturaListResponse > KalturaObjectBase > KalturaListResponse.
        // Hence, we cannot set the type explicitly and we need to expose the default type 'KalturaObjectBase'
        return { properties: {
                relatedObjects: { type: 'a', readOnly: true, subTypeConstructor: null, subType: 'KalturaListResponse' },
            } };
    };
    /**
     * @param {?} propertyName
     * @return {?}
     */
    KalturaObjectBase.prototype.hasMetadataProperty = /**
     * @param {?} propertyName
     * @return {?}
     */
    function (propertyName) {
        return !!this._getMetadata().properties[propertyName];
    };
    /**
     * @return {?}
     */
    KalturaObjectBase.prototype.toRequestObject = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var metadata = this._getMetadata();
        /** @type {?} */
        var result = {};
        try {
            Object.keys(metadata.properties).forEach(function (propertyName) {
                /** @type {?} */
                var propertyData = metadata.properties[propertyName];
                /** @type {?} */
                var propertyValue = _this._createRequestPropertyValue(propertyName, propertyData);
                switch (propertyValue.status) {
                    case "exists":
                        result[propertyName] = propertyValue.value;
                        break;
                    case "removed":
                        result[propertyName + "__null"] = ''; // mark property for deletion
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
    };
    /**
     * @param {?} data
     * @return {?}
     */
    KalturaObjectBase.prototype.fromResponseObject = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        var _this = this;
        /** @type {?} */
        var metadata = this._getMetadata();
        /** @type {?} */
        var result = {};
        try {
            Object.keys(metadata.properties).forEach(function (propertyName) {
                /** @type {?} */
                var propertyData = metadata.properties[propertyName];
                /** @type {?} */
                var propertyValue = _this._parseResponseProperty(propertyName, propertyData, data);
                if (propertyValue != null && typeof propertyValue !== 'undefined') {
                    _this[propertyName] = propertyValue;
                }
            });
        }
        catch (err) {
            // TODO [kaltura] should use logHandler
            logger.warn(err.message);
            throw err;
        }
        return result;
    };
    /**
     * @param {?} propertyName
     * @param {?} property
     * @param {?} source
     * @return {?}
     */
    KalturaObjectBase.prototype._parseResponseProperty = /**
     * @param {?} propertyName
     * @param {?} property
     * @param {?} source
     * @return {?}
     */
    function (propertyName, property, source) {
        var _this = this;
        /** @type {?} */
        var result;
        /** @type {?} */
        var sourceValue = propertyName ? source[propertyName] : source;
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
                        var propertyObjectType = sourceValue['objectType'];
                        if (propertyObjectType) {
                            result = this._createKalturaObject(propertyObjectType, property.subType);
                            if (result) {
                                result.fromResponseObject(sourceValue);
                            }
                            else {
                                throw new Error("Failed to create kaltura object of type '" + source['objectType'] + "' (fallback type '" + property.subType + "')");
                            }
                        }
                        else {
                            throw new Error("Failed to create kaltura object for property '" + propertyName + "' (type '" + property.subType + "'). provided response object is missing property 'objectType'.");
                        }
                        break;
                    case 'm':
                        /** @type {?} */
                        var parsedMap_1 = {};
                        if (sourceValue instanceof Object) {
                            Object.keys(sourceValue).forEach(function (itemKey) {
                                /** @type {?} */
                                var itemValue = sourceValue[itemKey];
                                /** @type {?} */
                                var newItem = _this._createKalturaObject(itemValue['objectType'], property.subType);
                                if (itemValue && newItem) {
                                    newItem.fromResponseObject(itemValue);
                                    parsedMap_1[itemKey] = newItem;
                                }
                                else {
                                    throw new Error("Failed to create kaltura object for type '" + property.subType + "'");
                                }
                            });
                            result = parsedMap_1;
                        }
                        else {
                            throw new Error("failed to parse property '" + propertyName + ". Expected type object, got type '" + typeof sourceValue);
                        }
                        break;
                    case 'a':
                        // array
                        if (sourceValue instanceof Array) {
                            /** @type {?} */
                            var parsedArray_1 = [];
                            sourceValue.forEach(function (responseItem) {
                                /** @type {?} */
                                var newItem = _this._createKalturaObject(responseItem['objectType'], property.subType);
                                if (newItem) {
                                    newItem.fromResponseObject(responseItem);
                                    parsedArray_1.push(newItem);
                                }
                                else {
                                    throw new Error("Failed to create kaltura object for type '" + responseItem['objectType'] + "' and for fallback type '" + property.subType + "'");
                                }
                            });
                            result = parsedArray_1;
                        }
                        else {
                            throw new Error("failed to parse property '" + propertyName + ". Expected type array, got type '" + typeof sourceValue);
                        }
                        break;
                    case 'd':
                        // date
                        if (this._isNumeric(sourceValue)) {
                            result = KalturaClientUtils.fromServerDate(sourceValue * 1);
                        }
                        else {
                            throw new Error("failed to parse property '" + propertyName + ". Expected type date, got type '" + typeof sourceValue);
                        }
                        break;
                    default:
                        break;
                }
            }
        }
        return result;
    };
    /**
     * @param {?} n
     * @return {?}
     */
    KalturaObjectBase.prototype._isNumeric = /**
     * @param {?} n
     * @return {?}
     */
    function (n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    };
    /**
     * @param {?} objectType
     * @param {?=} fallbackObjectType
     * @return {?}
     */
    KalturaObjectBase.prototype._createKalturaObject = /**
     * @param {?} objectType
     * @param {?=} fallbackObjectType
     * @return {?}
     */
    function (objectType, fallbackObjectType) {
        /** @type {?} */
        var result = null;
        /** @type {?} */
        var usedFallbackType = false;
        if (objectType) {
            result = KalturaObjectBaseFactory.createObject(objectType);
        }
        if (!result && fallbackObjectType) {
            usedFallbackType = true;
            result = KalturaObjectBaseFactory.createObject(fallbackObjectType);
        }
        if (usedFallbackType && result) {
            logger.warn("[kaltura-client]: Could not find object type '" + objectType + "', Falling back to '" + fallbackObjectType + "' object type. (Did you remember to set your accepted object types in the request \u201Cconfig.acceptedTypes\u201D attribute?)");
        }
        else if (!result) {
            logger.warn("[kaltura-client]: Could not find object type '" + objectType + "'. (Did you remember to set your accepted object types in the request \u201Cconfig.acceptedTypes\u201D attribute?)");
        }
        return result;
    };
    /**
     * @param {?} propertyName
     * @param {?} property
     * @return {?}
     */
    KalturaObjectBase.prototype._createRequestPropertyValue = /**
     * @param {?} propertyName
     * @param {?} property
     * @return {?}
     */
    function (propertyName, property) {
        /** @type {?} */
        var result = { status: 'missing' };
        if (property.type === 'c') {
            // constant string
            if (property.default) {
                result = { status: 'exists', value: property.default };
            }
        }
        else if (this._dependentProperties[propertyName]) {
            /** @type {?} */
            var dependentProperty = this._dependentProperties[propertyName];
            /** @type {?} */
            var resultValue = "{" + dependentProperty.request + ":result" + (dependentProperty.targetPath ? ':' + dependentProperty.targetPath : '') + "}";
            result = { status: 'exists', value: resultValue };
        }
        else if (!property.readOnly) {
            /** @type {?} */
            var value_1 = this[propertyName];
            if (typeof value_1 !== 'undefined') {
                if (value_1 === null) {
                    result = { status: 'removed' };
                }
                else {
                    switch (property.type) {
                        case 'b':
                            // boolean
                            result = { status: 'exists', value: value_1 };
                            break;
                        case 's':
                            // string
                            result = { status: 'exists', value: value_1 + '' };
                            break;
                        case 'n': // number
                        case 'en':
                            // enum of type number
                            result = { status: 'exists', value: value_1 * 1 };
                            break;
                        case 'o':
                            // object
                            if (value_1 instanceof KalturaObjectBase) {
                                result = { status: 'exists', value: value_1.toRequestObject() };
                            }
                            else {
                                throw new Error("failed to parse property. Expected '" + propertyName + " to be kaltura object");
                            }
                            break;
                        case 'a':
                            // array
                            if (value_1 instanceof Array) {
                                /** @type {?} */
                                var parsedArray_2 = [];
                                value_1.forEach(function (item) {
                                    if (item instanceof KalturaObjectBase) {
                                        parsedArray_2.push(item.toRequestObject());
                                    }
                                });
                                /** @type {?} */
                                var allowEmptyArrayAsAValue = this._allowedEmptyArray.indexOf(propertyName) !== -1;
                                if (allowEmptyArrayAsAValue || parsedArray_2.length !== 0) {
                                    if (parsedArray_2.length === value_1.length) {
                                        result = { status: 'exists', value: parsedArray_2 };
                                    }
                                    else {
                                        throw new Error("failed to parse array. Expected all '" + propertyName + " items to be kaltura object");
                                    }
                                }
                            }
                            else {
                                throw new Error("failed to parse property. Expected '" + propertyName + " to be Array");
                            }
                            break;
                        case 'm':
                            //map
                            if (value_1 instanceof Object) {
                                /** @type {?} */
                                var valueKeys = Object.keys(value_1);
                                if (valueKeys.length > 0) {
                                    /** @type {?} */
                                    var parsedObject_1 = {};
                                    valueKeys.forEach(function (itemKey) {
                                        /** @type {?} */
                                        var itemValue = value_1[itemKey];
                                        if (itemValue instanceof KalturaObjectBase) {
                                            parsedObject_1[itemKey] = itemValue.toRequestObject();
                                        }
                                    });
                                    if (valueKeys.length === Object.keys(parsedObject_1).length) {
                                        result = { status: 'exists', value: parsedObject_1 };
                                    }
                                    else {
                                        throw new Error("failed to parse map. Expected all '" + propertyName + " items to be kaltura object");
                                    }
                                }
                            }
                            else {
                                throw new Error("failed to parse property. Expected '" + propertyName + " to be kaltura object");
                            }
                            break;
                        case 'd':
                            // date
                            if (value_1 instanceof Date) {
                                result = { status: 'exists', value: KalturaClientUtils.toServerDate(value_1) };
                            }
                            else {
                                throw new Error("failed to parse property. Expected '" + propertyName + " to be date");
                            }
                            break;
                        case 'es':
                            // enum of type string
                            result = { status: 'exists', value: typeof value_1 === 'string' ? value_1 : undefined };
                            break;
                        case 'f':
                            if (value_1 instanceof FormData) {
                                result = { status: 'exists', value: value_1 };
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
    };
    /**
     * @param {...?} dependency
     * @return {?}
     */
    KalturaObjectBase.prototype.setDependency = /**
     * @param {...?} dependency
     * @return {?}
     */
    function () {
        var dependency = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            dependency[_i] = arguments[_i];
        }
        for (var i = 0, len = dependency.length; i < len; i++) {
            /** @type {?} */
            var item = dependency[i];
            var _a = /** @type {?} */ (item), property = _a.property, request = _a.request, targetPath = _a.targetPath;
            if (item instanceof Array) {
                property = item[0];
                request = item[1];
                targetPath = item.length === 3 ? item[2] : null;
            }
            // The server expect one based index (meaning the first item has index 1)
            // since Javascript array are zero based index we expose the api as zero based
            // and transform the index value in the actual request by adding 1
            request = request + 1;
            this._dependentProperties[property] = { property: property, request: request, targetPath: targetPath };
        }
        return this;
    };
    return KalturaObjectBase;
}());
/**
 * @abstract
 */
export { KalturaObjectBase };
if (false) {
    /** @type {?} */
    KalturaObjectBase.prototype._allowedEmptyArray;
    /** @type {?} */
    KalturaObjectBase.prototype._dependentProperties;
    /** @type {?} */
    KalturaObjectBase.prototype.relatedObjects;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2FsdHVyYS1vYmplY3QtYmFzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkva2FsdHVyYS1vYmplY3QtYmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzVELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JoRCxDQUFDOzs7Ozs7OztBQU9GLElBQU0sTUFBTSxHQUFHLElBQUksYUFBYSxDQUFDLG1CQUFtQixDQUFDLENBQUM7Ozs7O0FBR3RELFdBQWEsbUJBQW1CLEdBQTRDLEVBQUUsQ0FBQztBQUUvRSxJQUFBOzs7Ozs7O0lBR1MscUNBQVk7Ozs7SUFBbkIsVUFBb0IsSUFBVTs7UUFFNUIsSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBRWxCLEVBQUUsQ0FBQyxDQUFDLElBQUksWUFBWSxpQkFBaUIsQ0FBQyxDQUN0QyxDQUFDO1lBQ0MsUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUMvQjtRQUFBLElBQUksQ0FBQyxFQUFFLENBQUEsQ0FBQyxPQUFPLElBQUksS0FBSyxRQUFRLENBQUMsQ0FDbEMsQ0FBQztZQUNDLFFBQVEsR0FBRyxJQUFJLENBQUM7U0FDakI7O1FBRUQsSUFBTSxPQUFPLEdBQXdCLFFBQVEsQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUNyRixNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7S0FDdkM7bUNBOUNIO0lBK0NDLENBQUE7QUFsQkQsb0NBa0JDOzs7O0FBRUQ7OztBQUFBO0lBOEJFLDJCQUFZLElBQVU7a0NBNUJpQixFQUFF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QUFDLENBQUM7WUFDM0Isa0NBQU0sc0JBQVEsRUFBRSxvQkFBTyxFQUFFLDBCQUFVLENBQWU7WUFDbEQsRUFBRSxDQUFDLENBQUMsSUFBSSxZQUFZLEtBQUssQ0FBQyxDQUMxQixDQUFDO2dCQUNDLFFBQVEsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ25CLE9BQU8sR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2xCLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7YUFDakQ7Ozs7WUFLRCxPQUFPLEdBQUcsT0FBTyxHQUFHLENBQUMsQ0FBQztZQUN0QixJQUFJLENBQUMsb0JBQW9CLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxRQUFRLFVBQUEsRUFBRyxPQUFPLFNBQUEsRUFBRSxVQUFVLFlBQUEsRUFBRSxDQUFDO1NBQzFFO1FBRUQsTUFBTSxDQUFDLElBQUksQ0FBQztLQUNiOzRCQTFiSDtJQTJiQyxDQUFBOzs7O0FBMVlELDZCQTBZQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEthbHR1cmFDbGllbnRVdGlscyB9IGZyb20gXCIuL2thbHR1cmEtY2xpZW50LXV0aWxzXCI7XG5pbXBvcnQgeyBLYWx0dXJhTG9nZ2VyIH0gZnJvbSAnLi9rYWx0dXJhLWxvZ2dlcic7XG5cbmV4cG9ydCB0eXBlIERlcGVuZGVudFByb3BlcnR5ID0geyBwcm9wZXJ0eSA6IHN0cmluZywgcmVxdWVzdCA6IG51bWJlciwgdGFyZ2V0UGF0aD8gOiBzdHJpbmdbXSB9O1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFPYmplY3RNZXRhZGF0YVxue1xuICBwcm9wZXJ0aWVzIDogeyBba2V5IDogc3RyaW5nXSA6IEthbHR1cmFPYmplY3RQcm9wZXJ0eU1ldGFkYXRhfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhT2JqZWN0UHJvcGVydHlNZXRhZGF0YVxue1xuICByZWFkT25seT8gOiBib29sZWFuO1xuICB0eXBlIDogc3RyaW5nO1xuICBzdWJUeXBlPyA6IHN0cmluZztcbiAgZGVmYXVsdD8gOiBzdHJpbmc7XG4gIHN1YlR5cGVDb25zdHJ1Y3Rvcj8gOiB7IG5ldygpIDogS2FsdHVyYU9iamVjdEJhc2UgfTtcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYU9iamVjdEJhc2VBcmdzXG57XG4gIHJlbGF0ZWRPYmplY3RzPyA6IEthbHR1cmFPYmplY3RCYXNlW107XG59XG5cbmNvbnN0IGxvZ2dlciA9IG5ldyBLYWx0dXJhTG9nZ2VyKCdLYWx0dXJhT2JqZWN0QmFzZScpO1xuXG5leHBvcnQgdHlwZSBLYWx0dXJhT2JqZWN0Q2xhc3MgPSB7IG5ldyguLi5hcmdzKSA6IEthbHR1cmFPYmplY3RCYXNlIH07XG5leHBvcnQgY29uc3QgdHlwZXNNYXBwaW5nU3RvcmFnZSA6IHsgW2tleSA6IHN0cmluZ10gOiBLYWx0dXJhT2JqZWN0Q2xhc3N9ID0ge307XG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhT2JqZWN0QmFzZUZhY3Rvcnkge1xuICBzdGF0aWMgY3JlYXRlT2JqZWN0KHR5cGU6IEthbHR1cmFPYmplY3RCYXNlKSA6IEthbHR1cmFPYmplY3RCYXNlO1xuICBzdGF0aWMgY3JlYXRlT2JqZWN0KHR5cGVOYW1lIDogc3RyaW5nKSA6IEthbHR1cmFPYmplY3RCYXNlO1xuICBzdGF0aWMgY3JlYXRlT2JqZWN0KHR5cGUgOiBhbnkpIDogS2FsdHVyYU9iamVjdEJhc2VcbiAge1xuICAgIGxldCB0eXBlTmFtZSA9ICcnO1xuXG4gICAgaWYgKHR5cGUgaW5zdGFuY2VvZiBLYWx0dXJhT2JqZWN0QmFzZSlcbiAgICB7XG4gICAgICB0eXBlTmFtZSA9IHR5cGUuZ2V0VHlwZU5hbWUoKTtcbiAgICB9ZWxzZSBpZih0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpXG4gICAge1xuICAgICAgdHlwZU5hbWUgPSB0eXBlO1xuICAgIH1cblxuICAgIGNvbnN0IGZhY3RvcnkgOiBLYWx0dXJhT2JqZWN0Q2xhc3MgPSB0eXBlTmFtZSA/IHR5cGVzTWFwcGluZ1N0b3JhZ2VbdHlwZU5hbWVdIDogbnVsbDtcbiAgICByZXR1cm4gZmFjdG9yeSA/IG5ldyBmYWN0b3J5KCkgOiBudWxsO1xuICB9XG59XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBLYWx0dXJhT2JqZWN0QmFzZSB7XG5cbiAgcHJpdmF0ZSBfYWxsb3dlZEVtcHR5QXJyYXk6IHN0cmluZ1tdID0gW107XG4gIHByaXZhdGUgX2RlcGVuZGVudFByb3BlcnRpZXMgOiB7IFtrZXkgOiBzdHJpbmddIDogRGVwZW5kZW50UHJvcGVydHl9ID0ge307XG4gIHJlbGF0ZWRPYmplY3RzIDogS2FsdHVyYU9iamVjdEJhc2VbXTsgLy8gc2VlIGRldmVsb3BlciBub3RpY2UgaW4gbWV0aG9kICdfZ2V0TWV0YWRhdGEoKSdcblxuXG4gIGFsbG93RW1wdHlBcnJheSguLi4gcHJvcGVydGllczogc3RyaW5nW10pOiB0aGlzIHtcbiAgICBjb25zdCBtZXRhZGF0YSA9IHRoaXMuX2dldE1ldGFkYXRhKCkucHJvcGVydGllcztcbiAgICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHByb3BlcnRpZXMpIHtcbiAgICAgIGNvbnN0IG1ldGFkYXRhUHJvcGVydHkgPSBtZXRhZGF0YVtwcm9wZXJ0eV07XG4gICAgICBpZiAoIW1ldGFkYXRhUHJvcGVydHkpIHtcbiAgICAgICAgbG9nZ2VyLndhcm4oYGlnbm9yZSBwcm9wZXJ0eSAnJHtwcm9wZXJ0eX0nIGZsYWdlZCB0byBhbGxvdyBlbXB0eSBhcnJheSBhcyBpdCBkb2Vzbid0IG5vdCBleGlzdHMgb24gdHlwZSAoZGlkIHlvdSBzZXQgdGhlIHJpZ2h0IHByb3BlcnR5IGluIG1ldGhvZCAnYWxsb3dFbXB0eUFycmF5Jz8pYCk7XG4gICAgICB9IGVsc2UgaWYgKG1ldGFkYXRhUHJvcGVydHkudHlwZSAhPT0gJ2EnKSB7XG4gICAgICAgIGxvZ2dlci53YXJuKGBpZ25vcmUgcHJvcGVydHkgJyR7cHJvcGVydHl9JyBmbGFnZWQgdG8gYWxsb3cgZW1wdHkgYXJyYXkgYXMgaXQgaXMgbm90IG9mIHR5cGUgYXJyYXkgKGRpZCB5b3Ugc2V0IHRoZSByaWdodCBwcm9wZXJ0eSBpbiBtZXRob2QgJ2FsbG93RW1wdHlBcnJheSc/KWApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fYWxsb3dlZEVtcHR5QXJyYXkucHVzaChwcm9wZXJ0eSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzZXREYXRhKGhhbmRsZXIgOiAocmVxdWVzdCA6ICB0aGlzKSA9PiB2b2lkKSA6ICB0aGlzIHtcbiAgICBpZiAoaGFuZGxlcikge1xuICAgICAgaGFuZGxlcih0aGlzKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihkYXRhPyA6IHt9KVxuICB7XG4gICAgaWYgKGRhdGEpXG4gICAge1xuICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkYXRhKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHRoaXMucmVsYXRlZE9iamVjdHMgPT09ICd1bmRlZmluZWQnKSB0aGlzLnJlbGF0ZWRPYmplY3RzID0gW107XG4gIH1cblxuICBwdWJsaWMgZ2V0VHlwZU5hbWUoKSA6IHN0cmluZ1xuICB7XG4gICAgcmV0dXJuIHRoaXMuX2dldE1ldGFkYXRhKCkucHJvcGVydGllc1snb2JqZWN0VHlwZSddLmRlZmF1bHQ7XG4gIH1cblxuICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAge1xuICAgIC8vIERFVkVMT1BFUiBOT1RJQ0U6IGFjY29yZGluZyB0byB0aGUgc2VydmVyIHNjaGVtYSwgcHJvcGVydHkgJ3JlbGF0ZWRPYmplY3RzJyBzaG91bGQgaGF2ZSBiZSBvZiB0eXBlICdLYWx0dXJhTGlzdFJlc3BvbnNlJy5cbiAgICAvLyB0aGlzIGlzIG5vdCBhbiBvcHRpb24gYXMgaXQgY3JlYXRlZCBjaXJjbGUgcmVmZXJlbmNlIHdoZXJlIEthbHR1cmFMaXN0UmVzcG9uc2UgPiBLYWx0dXJhT2JqZWN0QmFzZSA+IEthbHR1cmFMaXN0UmVzcG9uc2UuXG4gICAgLy8gSGVuY2UsIHdlIGNhbm5vdCBzZXQgdGhlIHR5cGUgZXhwbGljaXRseSBhbmQgd2UgbmVlZCB0byBleHBvc2UgdGhlIGRlZmF1bHQgdHlwZSAnS2FsdHVyYU9iamVjdEJhc2UnXG4gICAgcmV0dXJuIHsgcHJvcGVydGllcyA6IHtcbiAgICAgIHJlbGF0ZWRPYmplY3RzOiB7IHR5cGU6ICdhJywgcmVhZE9ubHk6IHRydWUsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IG51bGwsIHN1YlR5cGUgOiAnS2FsdHVyYUxpc3RSZXNwb25zZSd9LFxuICAgIH19O1xuICB9XG5cbiAgcHVibGljIGhhc01ldGFkYXRhUHJvcGVydHkocHJvcGVydHlOYW1lOiBzdHJpbmcpOiBib29sZWFuXG4gIHtcbiAgICByZXR1cm4gISF0aGlzLl9nZXRNZXRhZGF0YSgpLnByb3BlcnRpZXNbcHJvcGVydHlOYW1lXTtcbiAgfVxuXG4gIHRvUmVxdWVzdE9iamVjdCgpIDoge30ge1xuICAgIGNvbnN0IG1ldGFkYXRhID0gdGhpcy5fZ2V0TWV0YWRhdGEoKTtcbiAgICBsZXQgcmVzdWx0ID0ge307XG5cbiAgICB0cnkge1xuICAgICAgT2JqZWN0LmtleXMobWV0YWRhdGEucHJvcGVydGllcykuZm9yRWFjaChwcm9wZXJ0eU5hbWUgPT4ge1xuICAgICAgICBjb25zdCBwcm9wZXJ0eURhdGEgID0gbWV0YWRhdGEucHJvcGVydGllc1twcm9wZXJ0eU5hbWVdO1xuICAgICAgICBjb25zdCBwcm9wZXJ0eVZhbHVlID0gdGhpcy5fY3JlYXRlUmVxdWVzdFByb3BlcnR5VmFsdWUocHJvcGVydHlOYW1lLCBwcm9wZXJ0eURhdGEpO1xuXG4gICAgICAgIHN3aXRjaCAocHJvcGVydHlWYWx1ZS5zdGF0dXMpXG4gICAgICAgIHtcbiAgICAgICAgICBjYXNlIFwiZXhpc3RzXCI6XG4gICAgICAgICAgICByZXN1bHRbcHJvcGVydHlOYW1lXSA9IHByb3BlcnR5VmFsdWUudmFsdWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwicmVtb3ZlZFwiOlxuICAgICAgICAgICAgcmVzdWx0W2Ake3Byb3BlcnR5TmFtZX1fX251bGxgXSA9ICcnOyAvLyBtYXJrIHByb3BlcnR5IGZvciBkZWxldGlvblxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcIm1pc3NpbmdcIjpcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1jYXRjaChlcnIpXG4gICAge1xuICAgICAgLy8gVE9ETyBba2FsdHVyYV0gc2hvdWxkIHVzZSBsb2dIYW5kbGVyXG4gICAgICBsb2dnZXIud2FybihlcnIubWVzc2FnZSk7XG4gICAgICB0aHJvdyBlcnI7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGZyb21SZXNwb25zZU9iamVjdChkYXRhIDogYW55KSA6IHt9IHtcbiAgICBjb25zdCBtZXRhZGF0YSA9IHRoaXMuX2dldE1ldGFkYXRhKCk7XG4gICAgbGV0IHJlc3VsdCA9IHt9O1xuXG4gICAgdHJ5IHtcbiAgICAgIE9iamVjdC5rZXlzKG1ldGFkYXRhLnByb3BlcnRpZXMpLmZvckVhY2gocHJvcGVydHlOYW1lID0+IHtcbiAgICAgICAgY29uc3QgcHJvcGVydHlEYXRhID0gbWV0YWRhdGEucHJvcGVydGllc1twcm9wZXJ0eU5hbWVdO1xuICAgICAgICBjb25zdCBwcm9wZXJ0eVZhbHVlID0gdGhpcy5fcGFyc2VSZXNwb25zZVByb3BlcnR5KHByb3BlcnR5TmFtZSwgcHJvcGVydHlEYXRhLCBkYXRhKTtcblxuICAgICAgICBpZiAocHJvcGVydHlWYWx1ZSAhPSBudWxsICYmIHR5cGVvZiBwcm9wZXJ0eVZhbHVlICE9PSAndW5kZWZpbmVkJylcbiAgICAgICAge1xuICAgICAgICAgIHRoaXNbcHJvcGVydHlOYW1lXSA9IHByb3BlcnR5VmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1jYXRjaChlcnIpXG4gICAge1xuICAgICAgLy8gVE9ETyBba2FsdHVyYV0gc2hvdWxkIHVzZSBsb2dIYW5kbGVyXG4gICAgICBsb2dnZXIud2FybihlcnIubWVzc2FnZSk7XG4gICAgICB0aHJvdyBlcnI7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG5cblxuICBwcm90ZWN0ZWQgX3BhcnNlUmVzcG9uc2VQcm9wZXJ0eShwcm9wZXJ0eU5hbWUgOiBzdHJpbmcsIHByb3BlcnR5IDogS2FsdHVyYU9iamVjdFByb3BlcnR5TWV0YWRhdGEsIHNvdXJjZSA6IGFueSkgOiBhbnkge1xuXG4gICAgbGV0IHJlc3VsdDtcbiAgICBsZXQgc291cmNlVmFsdWUgPSBwcm9wZXJ0eU5hbWUgPyBzb3VyY2VbcHJvcGVydHlOYW1lXSA6IHNvdXJjZTtcblxuICAgIGlmICh0eXBlb2Ygc291cmNlVmFsdWUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBpZiAoc291cmNlVmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgcmVzdWx0ID0gbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN3aXRjaCAocHJvcGVydHkudHlwZSkge1xuICAgICAgICAgIGNhc2UgJ2InOiAvLyBib29sZWFuXG4gICAgICAgICAgICBpZiAodHlwZW9mIHNvdXJjZVZhbHVlID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAgICAgcmVzdWx0ID0gc291cmNlVmFsdWU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNvdXJjZVZhbHVlICsgJycgPT09ICcwJykge1xuICAgICAgICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc291cmNlVmFsdWUgKyAnJyA9PT0gJzEnKSB7XG4gICAgICAgICAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdzJzogLy8gc3RyaW5nXG4gICAgICAgICAgICByZXN1bHQgPSBzb3VyY2VWYWx1ZSArICcnO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnbic6IC8vIG51bWJlclxuICAgICAgICAgIGNhc2UgJ2VuJzogLy8gZW51bSBvZiB0eXBlIG51bWJlclxuICAgICAgICAgICAgcmVzdWx0ID0gc291cmNlVmFsdWUgKiAxO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnZXMnOiAvLyBlbnVtIG9mIHR5cGUgbnVtYmVyXG4gICAgICAgICAgICByZXN1bHQgPSB0eXBlb2Ygc291cmNlVmFsdWUgIT09ICd1bmRlZmluZWQnICYmIHNvdXJjZVZhbHVlICE9PSBudWxsID8gc291cmNlVmFsdWUudG9TdHJpbmcoKSA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ28nOiAvLyBvYmplY3RcbiAgICAgICAgICAgIGNvbnN0IHByb3BlcnR5T2JqZWN0VHlwZSA9IHNvdXJjZVZhbHVlWydvYmplY3RUeXBlJ107XG5cbiAgICAgICAgICAgIGlmIChwcm9wZXJ0eU9iamVjdFR5cGUpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuX2NyZWF0ZUthbHR1cmFPYmplY3QocHJvcGVydHlPYmplY3RUeXBlLCBwcm9wZXJ0eS5zdWJUeXBlKTtcblxuICAgICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LmZyb21SZXNwb25zZU9iamVjdChzb3VyY2VWYWx1ZSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gY3JlYXRlIGthbHR1cmEgb2JqZWN0IG9mIHR5cGUgJyR7c291cmNlWydvYmplY3RUeXBlJ119JyAoZmFsbGJhY2sgdHlwZSAnJHtwcm9wZXJ0eS5zdWJUeXBlfScpYCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1lbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGNyZWF0ZSBrYWx0dXJhIG9iamVjdCBmb3IgcHJvcGVydHkgJyR7cHJvcGVydHlOYW1lfScgKHR5cGUgJyR7cHJvcGVydHkuc3ViVHlwZX0nKS4gcHJvdmlkZWQgcmVzcG9uc2Ugb2JqZWN0IGlzIG1pc3NpbmcgcHJvcGVydHkgJ29iamVjdFR5cGUnLmApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdtJzogLy8gbWFwXG4gICAgICAgICAgICBjb25zdCBwYXJzZWRNYXAgPSB7fTtcbiAgICAgICAgICAgIGlmIChzb3VyY2VWYWx1ZSBpbnN0YW5jZW9mIE9iamVjdCkge1xuICAgICAgICAgICAgICBPYmplY3Qua2V5cyhzb3VyY2VWYWx1ZSkuZm9yRWFjaChpdGVtS2V5ID0+XG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtVmFsdWUgPSBzb3VyY2VWYWx1ZVtpdGVtS2V5XTtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdJdGVtID0gIHRoaXMuX2NyZWF0ZUthbHR1cmFPYmplY3QoaXRlbVZhbHVlWydvYmplY3RUeXBlJ10sIHByb3BlcnR5LnN1YlR5cGUpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW1WYWx1ZSAmJiBuZXdJdGVtKSB7XG4gICAgICAgICAgICAgICAgICBuZXdJdGVtLmZyb21SZXNwb25zZU9iamVjdChpdGVtVmFsdWUpO1xuICAgICAgICAgICAgICAgICAgcGFyc2VkTWFwW2l0ZW1LZXldID0gbmV3SXRlbTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gY3JlYXRlIGthbHR1cmEgb2JqZWN0IGZvciB0eXBlICcke3Byb3BlcnR5LnN1YlR5cGV9J2ApO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICByZXN1bHQgPSBwYXJzZWRNYXA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYGZhaWxlZCB0byBwYXJzZSBwcm9wZXJ0eSAnJHtwcm9wZXJ0eU5hbWV9LiBFeHBlY3RlZCB0eXBlIG9iamVjdCwgZ290IHR5cGUgJyR7dHlwZW9mIHNvdXJjZVZhbHVlfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnYSc6IC8vIGFycmF5XG4gICAgICAgICAgICBpZiAoc291cmNlVmFsdWUgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgICBjb25zdCBwYXJzZWRBcnJheSA9IFtdO1xuICAgICAgICAgICAgICBzb3VyY2VWYWx1ZS5mb3JFYWNoKHJlc3BvbnNlSXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3SXRlbSA9IHRoaXMuX2NyZWF0ZUthbHR1cmFPYmplY3QocmVzcG9uc2VJdGVtWydvYmplY3RUeXBlJ10sIHByb3BlcnR5LnN1YlR5cGUpO1xuXG4gICAgICAgICAgICAgICAgaWYgKG5ld0l0ZW0pIHtcbiAgICAgICAgICAgICAgICAgIG5ld0l0ZW0uZnJvbVJlc3BvbnNlT2JqZWN0KHJlc3BvbnNlSXRlbSk7XG4gICAgICAgICAgICAgICAgICBwYXJzZWRBcnJheS5wdXNoKG5ld0l0ZW0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBjcmVhdGUga2FsdHVyYSBvYmplY3QgZm9yIHR5cGUgJyR7cmVzcG9uc2VJdGVtWydvYmplY3RUeXBlJ119JyBhbmQgZm9yIGZhbGxiYWNrIHR5cGUgJyR7cHJvcGVydHkuc3ViVHlwZX0nYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICByZXN1bHQgPSBwYXJzZWRBcnJheTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgZmFpbGVkIHRvIHBhcnNlIHByb3BlcnR5ICcke3Byb3BlcnR5TmFtZX0uIEV4cGVjdGVkIHR5cGUgYXJyYXksIGdvdCB0eXBlICcke3R5cGVvZiBzb3VyY2VWYWx1ZX1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2QnOiAvLyBkYXRlXG4gICAgICAgICAgICBpZiAodGhpcy5faXNOdW1lcmljKHNvdXJjZVZhbHVlKSkge1xuICAgICAgICAgICAgICByZXN1bHQgPSBLYWx0dXJhQ2xpZW50VXRpbHMuZnJvbVNlcnZlckRhdGUoc291cmNlVmFsdWUqMSlcbiAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBmYWlsZWQgdG8gcGFyc2UgcHJvcGVydHkgJyR7cHJvcGVydHlOYW1lfS4gRXhwZWN0ZWQgdHlwZSBkYXRlLCBnb3QgdHlwZSAnJHt0eXBlb2Ygc291cmNlVmFsdWV9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBwcml2YXRlIF9pc051bWVyaWMobiA6IGFueSkgOiBib29sZWFuIHtcbiAgICByZXR1cm4gIWlzTmFOKHBhcnNlRmxvYXQobikpICYmIGlzRmluaXRlKG4pO1xuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlS2FsdHVyYU9iamVjdChvYmplY3RUeXBlIDogc3RyaW5nLCBmYWxsYmFja09iamVjdFR5cGU/IDogc3RyaW5nKSA6IEthbHR1cmFPYmplY3RCYXNlXG4gIHtcbiAgICBsZXQgcmVzdWx0ID0gbnVsbDtcbiAgICBsZXQgdXNlZEZhbGxiYWNrVHlwZSA9IGZhbHNlO1xuICAgIGlmIChvYmplY3RUeXBlKVxuICAgIHtcbiAgICAgIHJlc3VsdCA9IEthbHR1cmFPYmplY3RCYXNlRmFjdG9yeS5jcmVhdGVPYmplY3Qob2JqZWN0VHlwZSk7XG4gICAgfVxuXG4gICAgaWYgKCFyZXN1bHQgJiYgZmFsbGJhY2tPYmplY3RUeXBlKVxuICAgIHtcbiAgICAgIHVzZWRGYWxsYmFja1R5cGUgPSB0cnVlO1xuICAgICAgcmVzdWx0ID0gS2FsdHVyYU9iamVjdEJhc2VGYWN0b3J5LmNyZWF0ZU9iamVjdChmYWxsYmFja09iamVjdFR5cGUpO1xuICAgIH1cblxuICAgIGlmICh1c2VkRmFsbGJhY2tUeXBlICYmIHJlc3VsdClcbiAgICB7XG4gICAgICBsb2dnZXIud2FybihgW2thbHR1cmEtY2xpZW50XTogQ291bGQgbm90IGZpbmQgb2JqZWN0IHR5cGUgJyR7b2JqZWN0VHlwZX0nLCBGYWxsaW5nIGJhY2sgdG8gJyR7ZmFsbGJhY2tPYmplY3RUeXBlfScgb2JqZWN0IHR5cGUuIChEaWQgeW91IHJlbWVtYmVyIHRvIHNldCB5b3VyIGFjY2VwdGVkIG9iamVjdCB0eXBlcyBpbiB0aGUgcmVxdWVzdCDigJxjb25maWcuYWNjZXB0ZWRUeXBlc+KAnSBhdHRyaWJ1dGU/KWApO1xuICAgIH1lbHNlIGlmICghcmVzdWx0KVxuICAgIHtcbiAgICAgIGxvZ2dlci53YXJuKGBba2FsdHVyYS1jbGllbnRdOiBDb3VsZCBub3QgZmluZCBvYmplY3QgdHlwZSAnJHtvYmplY3RUeXBlfScuIChEaWQgeW91IHJlbWVtYmVyIHRvIHNldCB5b3VyIGFjY2VwdGVkIG9iamVjdCB0eXBlcyBpbiB0aGUgcmVxdWVzdCDigJxjb25maWcuYWNjZXB0ZWRUeXBlc+KAnSBhdHRyaWJ1dGU/KWApO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVSZXF1ZXN0UHJvcGVydHlWYWx1ZShwcm9wZXJ0eU5hbWUgOiBzdHJpbmcsIHByb3BlcnR5IDogS2FsdHVyYU9iamVjdFByb3BlcnR5TWV0YWRhdGEpIDogeyBzdGF0dXMgOiAnbWlzc2luZycgfCAncmVtb3ZlZCcgfCAnZXhpc3RzJywgdmFsdWU/IDogYW55IH0ge1xuXG4gICAgbGV0IHJlc3VsdCA6IHsgc3RhdHVzIDogJ21pc3NpbmcnIHwgJ3JlbW92ZWQnIHwgJ2V4aXN0cycsIHZhbHVlPyA6IGFueSB9ID0geyBzdGF0dXMgOiAnbWlzc2luZyd9O1xuXG4gICAgaWYgKHByb3BlcnR5LnR5cGUgPT09ICdjJylcbiAgICB7XG4gICAgICAvLyBjb25zdGFudCBzdHJpbmdcbiAgICAgIGlmIChwcm9wZXJ0eS5kZWZhdWx0KVxuICAgICAge1xuICAgICAgICByZXN1bHQgPSB7IHN0YXR1cyA6ICdleGlzdHMnLCB2YWx1ZSA6IHByb3BlcnR5LmRlZmF1bHR9O1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5fZGVwZW5kZW50UHJvcGVydGllc1twcm9wZXJ0eU5hbWVdKVxuICAgIHtcbiAgICAgIGNvbnN0IGRlcGVuZGVudFByb3BlcnR5ID0gdGhpcy5fZGVwZW5kZW50UHJvcGVydGllc1twcm9wZXJ0eU5hbWVdO1xuICAgICAgY29uc3QgcmVzdWx0VmFsdWUgPSBgeyR7ZGVwZW5kZW50UHJvcGVydHkucmVxdWVzdH06cmVzdWx0JHtkZXBlbmRlbnRQcm9wZXJ0eS50YXJnZXRQYXRoID8gJzonICsgZGVwZW5kZW50UHJvcGVydHkudGFyZ2V0UGF0aCA6ICcnfX1gO1xuICAgICAgcmVzdWx0ID0geyBzdGF0dXMgOiAnZXhpc3RzJywgdmFsdWUgOiByZXN1bHRWYWx1ZX07XG4gICAgfVxuICAgIGVsc2UgaWYgKCFwcm9wZXJ0eS5yZWFkT25seSkge1xuICAgICAgbGV0IHZhbHVlID0gdGhpc1twcm9wZXJ0eU5hbWVdO1xuXG4gICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICByZXN1bHQgPSB7IHN0YXR1cyA6ICdyZW1vdmVkJ307XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3dpdGNoIChwcm9wZXJ0eS50eXBlKSB7XG4gICAgICAgICAgICBjYXNlICdiJzogLy8gYm9vbGVhblxuICAgICAgICAgICAgICByZXN1bHQgPSB7IHN0YXR1cyA6ICdleGlzdHMnLCB2YWx1ZSA6IHZhbHVlfTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdzJzogLy8gc3RyaW5nXG4gICAgICAgICAgICAgIHJlc3VsdCA9IHsgc3RhdHVzIDogJ2V4aXN0cycsIHZhbHVlIDogdmFsdWUgKyAnJ307XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnbic6IC8vIG51bWJlclxuICAgICAgICAgICAgY2FzZSAnZW4nOiAvLyBlbnVtIG9mIHR5cGUgbnVtYmVyXG4gICAgICAgICAgICAgIHJlc3VsdCA9IHsgc3RhdHVzIDogJ2V4aXN0cycsIHZhbHVlIDogdmFsdWUgKiAxfTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdvJzogLy8gb2JqZWN0XG4gICAgICAgICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEthbHR1cmFPYmplY3RCYXNlKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0geyBzdGF0dXMgOiAnZXhpc3RzJywgdmFsdWUgOiB2YWx1ZS50b1JlcXVlc3RPYmplY3QoKX07XG4gICAgICAgICAgICAgIH1lbHNlXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYGZhaWxlZCB0byBwYXJzZSBwcm9wZXJ0eS4gRXhwZWN0ZWQgJyR7cHJvcGVydHlOYW1lfSB0byBiZSBrYWx0dXJhIG9iamVjdGApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnYSc6IC8vIGFycmF5XG4gICAgICAgICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFyc2VkQXJyYXkgPSBbXTtcbiAgICAgICAgICAgICAgICB2YWx1ZS5mb3JFYWNoKGl0ZW0gPT5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBpZiAoaXRlbSBpbnN0YW5jZW9mIEthbHR1cmFPYmplY3RCYXNlKVxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBwYXJzZWRBcnJheS5wdXNoKGl0ZW0udG9SZXF1ZXN0T2JqZWN0KCkpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgYWxsb3dFbXB0eUFycmF5QXNBVmFsdWUgPSB0aGlzLl9hbGxvd2VkRW1wdHlBcnJheS5pbmRleE9mKHByb3BlcnR5TmFtZSkgIT09IC0xO1xuICAgICAgICAgICAgICAgIGlmIChhbGxvd0VtcHR5QXJyYXlBc0FWYWx1ZSB8fCBwYXJzZWRBcnJheS5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgICAgICAgIGlmIChwYXJzZWRBcnJheS5sZW5ndGggPT09IHZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB7c3RhdHVzOiAnZXhpc3RzJywgdmFsdWU6IHBhcnNlZEFycmF5fTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgZmFpbGVkIHRvIHBhcnNlIGFycmF5LiBFeHBlY3RlZCBhbGwgJyR7cHJvcGVydHlOYW1lfSBpdGVtcyB0byBiZSBrYWx0dXJhIG9iamVjdGApO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfWVsc2VcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgZmFpbGVkIHRvIHBhcnNlIHByb3BlcnR5LiBFeHBlY3RlZCAnJHtwcm9wZXJ0eU5hbWV9IHRvIGJlIEFycmF5YCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdtJzogLy9tYXBcbiAgICAgICAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgT2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWVLZXlzID0gT2JqZWN0LmtleXModmFsdWUpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlS2V5cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBwYXJzZWRPYmplY3QgPSB7fTtcbiAgICAgICAgICAgICAgICAgIHZhbHVlS2V5cy5mb3JFYWNoKGl0ZW1LZXkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaXRlbVZhbHVlID0gdmFsdWVbaXRlbUtleV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtVmFsdWUgaW5zdGFuY2VvZiBLYWx0dXJhT2JqZWN0QmFzZSkge1xuICAgICAgICAgICAgICAgICAgICAgIHBhcnNlZE9iamVjdFtpdGVtS2V5XSA9IGl0ZW1WYWx1ZS50b1JlcXVlc3RPYmplY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlS2V5cy5sZW5ndGggPT09IE9iamVjdC5rZXlzKHBhcnNlZE9iamVjdCkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHtzdGF0dXM6ICdleGlzdHMnLCB2YWx1ZTogcGFyc2VkT2JqZWN0fTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgZmFpbGVkIHRvIHBhcnNlIG1hcC4gRXhwZWN0ZWQgYWxsICcke3Byb3BlcnR5TmFtZX0gaXRlbXMgdG8gYmUga2FsdHVyYSBvYmplY3RgKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1lbHNlXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYGZhaWxlZCB0byBwYXJzZSBwcm9wZXJ0eS4gRXhwZWN0ZWQgJyR7cHJvcGVydHlOYW1lfSB0byBiZSBrYWx0dXJhIG9iamVjdGApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZCc6IC8vIGRhdGVcbiAgICAgICAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHsgc3RhdHVzIDogJ2V4aXN0cycsIHZhbHVlIDogS2FsdHVyYUNsaWVudFV0aWxzLnRvU2VydmVyRGF0ZSh2YWx1ZSl9O1xuICAgICAgICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBmYWlsZWQgdG8gcGFyc2UgcHJvcGVydHkuIEV4cGVjdGVkICcke3Byb3BlcnR5TmFtZX0gdG8gYmUgZGF0ZWApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZXMnOiAvLyBlbnVtIG9mIHR5cGUgc3RyaW5nXG4gICAgICAgICAgICAgIHJlc3VsdCA9IHsgc3RhdHVzIDogJ2V4aXN0cycsIHZhbHVlIDogdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyA/IHZhbHVlIDogdW5kZWZpbmVkfTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdmJzpcbiAgICAgICAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgRm9ybURhdGEpXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB7c3RhdHVzIDogJ2V4aXN0cycsIHZhbHVlIDogdmFsdWV9O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgLy8gZG8gbm90aGluZ1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgc2V0RGVwZW5kZW5jeSguLi5kZXBlbmRlbmN5IDogKERlcGVuZGVudFByb3BlcnR5IHwgW3N0cmluZywgbnVtYmVyXSB8IFtzdHJpbmcsIG51bWJlcixzdHJpbmddKVtdKSA6IHRoaXNcbiAge1xuICAgIGZvcihsZXQgaSA9IDAsIGxlbiA9IGRlcGVuZGVuY3kubGVuZ3RoO2k8bGVuO2krKylcbiAgICB7XG4gICAgICBjb25zdCBpdGVtID0gZGVwZW5kZW5jeVtpXTtcbiAgICAgIGxldCB7IHByb3BlcnR5LCByZXF1ZXN0LCB0YXJnZXRQYXRoIH0gPSA8YW55Pml0ZW07XG4gICAgICBpZiAoaXRlbSBpbnN0YW5jZW9mIEFycmF5KVxuICAgICAge1xuICAgICAgICBwcm9wZXJ0eSA9IGl0ZW1bMF07XG4gICAgICAgIHJlcXVlc3QgPSBpdGVtWzFdO1xuICAgICAgICB0YXJnZXRQYXRoID0gaXRlbS5sZW5ndGggPT09IDMgPyBpdGVtWzJdIDogbnVsbDtcbiAgICAgIH1cblxuICAgICAgLy8gVGhlIHNlcnZlciBleHBlY3Qgb25lIGJhc2VkIGluZGV4IChtZWFuaW5nIHRoZSBmaXJzdCBpdGVtIGhhcyBpbmRleCAxKVxuICAgICAgLy8gc2luY2UgSmF2YXNjcmlwdCBhcnJheSBhcmUgemVybyBiYXNlZCBpbmRleCB3ZSBleHBvc2UgdGhlIGFwaSBhcyB6ZXJvIGJhc2VkXG4gICAgICAvLyBhbmQgdHJhbnNmb3JtIHRoZSBpbmRleCB2YWx1ZSBpbiB0aGUgYWN0dWFsIHJlcXVlc3QgYnkgYWRkaW5nIDFcbiAgICAgIHJlcXVlc3QgPSByZXF1ZXN0ICsgMTtcbiAgICAgIHRoaXMuX2RlcGVuZGVudFByb3BlcnRpZXNbcHJvcGVydHldID0geyBwcm9wZXJ0eSAsIHJlcXVlc3QsIHRhcmdldFBhdGggfTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuIl19