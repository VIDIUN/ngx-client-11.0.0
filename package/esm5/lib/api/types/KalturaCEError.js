/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaCEErrorArgs() { }
/** @type {?|undefined} */
KalturaCEErrorArgs.prototype.partnerId;
/** @type {?|undefined} */
KalturaCEErrorArgs.prototype.browser;
/** @type {?|undefined} */
KalturaCEErrorArgs.prototype.serverIp;
/** @type {?|undefined} */
KalturaCEErrorArgs.prototype.serverOs;
/** @type {?|undefined} */
KalturaCEErrorArgs.prototype.phpVersion;
/** @type {?|undefined} */
KalturaCEErrorArgs.prototype.ceAdminEmail;
/** @type {?|undefined} */
KalturaCEErrorArgs.prototype.type;
/** @type {?|undefined} */
KalturaCEErrorArgs.prototype.description;
/** @type {?|undefined} */
KalturaCEErrorArgs.prototype.data;
var KalturaCEError = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaCEError, _super);
    function KalturaCEError(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaCEError.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaCEError' },
            id: { type: 's', readOnly: true },
            partnerId: { type: 'n' },
            browser: { type: 's' },
            serverIp: { type: 's' },
            serverOs: { type: 's' },
            phpVersion: { type: 's' },
            ceAdminEmail: { type: 's' },
            type: { type: 's' },
            description: { type: 's' },
            data: { type: 's' }
        });
        return result;
    };
    return KalturaCEError;
}(KalturaObjectBase));
export { KalturaCEError };
if (false) {
    /** @type {?} */
    KalturaCEError.prototype.id;
    /** @type {?} */
    KalturaCEError.prototype.partnerId;
    /** @type {?} */
    KalturaCEError.prototype.browser;
    /** @type {?} */
    KalturaCEError.prototype.serverIp;
    /** @type {?} */
    KalturaCEError.prototype.serverOs;
    /** @type {?} */
    KalturaCEError.prototype.phpVersion;
    /** @type {?} */
    KalturaCEError.prototype.ceAdminEmail;
    /** @type {?} */
    KalturaCEError.prototype.type;
    /** @type {?} */
    KalturaCEError.prototype.description;
    /** @type {?} */
    KalturaCEError.prototype.data;
}
typesMappingStorage['KalturaCEError'] = KalturaCEError;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUNFRXJyb3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFDRUVycm9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxpQkFBaUIsRUFBeUIsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlbEYsSUFBQTtJQUFvQywwQ0FBaUI7SUFhakQsd0JBQVksSUFBMEI7ZUFFbEMsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyxxQ0FBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxnQkFBZ0IsRUFBRTtZQUNuRSxFQUFFLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDcEMsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQixPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hCLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzNCLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDN0IsSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNyQixXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVCLElBQUksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDWixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO3lCQXZETDtFQWlCb0MsaUJBQWlCLEVBdUNwRCxDQUFBO0FBdkNELDBCQXVDQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLGNBQWMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0QmFzZSwgS2FsdHVyYU9iamVjdEJhc2VBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUNFRXJyb3JBcmdzICBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlQXJncyB7XG4gICAgcGFydG5lcklkPyA6IG51bWJlcjtcblx0YnJvd3Nlcj8gOiBzdHJpbmc7XG5cdHNlcnZlcklwPyA6IHN0cmluZztcblx0c2VydmVyT3M/IDogc3RyaW5nO1xuXHRwaHBWZXJzaW9uPyA6IHN0cmluZztcblx0Y2VBZG1pbkVtYWlsPyA6IHN0cmluZztcblx0dHlwZT8gOiBzdHJpbmc7XG5cdGRlc2NyaXB0aW9uPyA6IHN0cmluZztcblx0ZGF0YT8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFDRUVycm9yIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2Uge1xuXG4gICAgcmVhZG9ubHkgaWQgOiBzdHJpbmc7XG5cdHBhcnRuZXJJZCA6IG51bWJlcjtcblx0YnJvd3NlciA6IHN0cmluZztcblx0c2VydmVySXAgOiBzdHJpbmc7XG5cdHNlcnZlck9zIDogc3RyaW5nO1xuXHRwaHBWZXJzaW9uIDogc3RyaW5nO1xuXHRjZUFkbWluRW1haWwgOiBzdHJpbmc7XG5cdHR5cGUgOiBzdHJpbmc7XG5cdGRlc2NyaXB0aW9uIDogc3RyaW5nO1xuXHRkYXRhIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhQ0VFcnJvckFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhQ0VFcnJvcicgfSxcblx0XHRcdFx0aWQgOiB7IHR5cGUgOiAncycsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRwYXJ0bmVySWQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0YnJvd3NlciA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzZXJ2ZXJJcCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzZXJ2ZXJPcyA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRwaHBWZXJzaW9uIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGNlQWRtaW5FbWFpbCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR0eXBlIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGRlc2NyaXB0aW9uIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGRhdGEgOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUNFRXJyb3InXSA9IEthbHR1cmFDRUVycm9yOyJdfQ==