/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaUploadTokenStatus } from './KalturaUploadTokenStatus';
import { KalturaFilter } from './KalturaFilter';
/**
 * @record
 */
export function KalturaUploadTokenBaseFilterArgs() { }
/** @type {?|undefined} */
KalturaUploadTokenBaseFilterArgs.prototype.idEqual;
/** @type {?|undefined} */
KalturaUploadTokenBaseFilterArgs.prototype.idIn;
/** @type {?|undefined} */
KalturaUploadTokenBaseFilterArgs.prototype.userIdEqual;
/** @type {?|undefined} */
KalturaUploadTokenBaseFilterArgs.prototype.statusEqual;
/** @type {?|undefined} */
KalturaUploadTokenBaseFilterArgs.prototype.statusIn;
/** @type {?|undefined} */
KalturaUploadTokenBaseFilterArgs.prototype.fileNameEqual;
/** @type {?|undefined} */
KalturaUploadTokenBaseFilterArgs.prototype.fileSizeEqual;
var KalturaUploadTokenBaseFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaUploadTokenBaseFilter, _super);
    function KalturaUploadTokenBaseFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaUploadTokenBaseFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaUploadTokenBaseFilter' },
            idEqual: { type: 's' },
            idIn: { type: 's' },
            userIdEqual: { type: 's' },
            statusEqual: { type: 'en', subTypeConstructor: KalturaUploadTokenStatus, subType: 'KalturaUploadTokenStatus' },
            statusIn: { type: 's' },
            fileNameEqual: { type: 's' },
            fileSizeEqual: { type: 'n' }
        });
        return result;
    };
    return KalturaUploadTokenBaseFilter;
}(KalturaFilter));
export { KalturaUploadTokenBaseFilter };
if (false) {
    /** @type {?} */
    KalturaUploadTokenBaseFilter.prototype.idEqual;
    /** @type {?} */
    KalturaUploadTokenBaseFilter.prototype.idIn;
    /** @type {?} */
    KalturaUploadTokenBaseFilter.prototype.userIdEqual;
    /** @type {?} */
    KalturaUploadTokenBaseFilter.prototype.statusEqual;
    /** @type {?} */
    KalturaUploadTokenBaseFilter.prototype.statusIn;
    /** @type {?} */
    KalturaUploadTokenBaseFilter.prototype.fileNameEqual;
    /** @type {?} */
    KalturaUploadTokenBaseFilter.prototype.fileSizeEqual;
}
typesMappingStorage['KalturaUploadTokenBaseFilter'] = KalturaUploadTokenBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVVwbG9hZFRva2VuQmFzZUZpbHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYVVwbG9hZFRva2VuQmFzZUZpbHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN0RSxPQUFPLEVBQUUsYUFBYSxFQUFxQixNQUFNLGlCQUFpQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYW5FLElBQUE7SUFBa0Qsd0RBQWE7SUFVM0Qsc0NBQVksSUFBd0M7ZUFFaEQsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyxtREFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyw4QkFBOEIsRUFBRTtZQUNqRixPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hCLElBQUksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDckIsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1QixXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHdCQUF3QixFQUFFLE9BQU8sRUFBRywwQkFBMEIsRUFBRTtZQUNsSCxRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLGFBQWEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDOUIsYUFBYSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNyQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO3VDQWhETDtFQWdCa0QsYUFBYSxFQWlDOUQsQ0FBQTtBQWpDRCx3Q0FpQ0M7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsOEJBQThCLENBQUMsR0FBRyw0QkFBNEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhVXBsb2FkVG9rZW5TdGF0dXMgfSBmcm9tICcuL0thbHR1cmFVcGxvYWRUb2tlblN0YXR1cyc7XG5pbXBvcnQgeyBLYWx0dXJhRmlsdGVyLCBLYWx0dXJhRmlsdGVyQXJncyB9IGZyb20gJy4vS2FsdHVyYUZpbHRlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYVVwbG9hZFRva2VuQmFzZUZpbHRlckFyZ3MgIGV4dGVuZHMgS2FsdHVyYUZpbHRlckFyZ3Mge1xuICAgIGlkRXF1YWw/IDogc3RyaW5nO1xuXHRpZEluPyA6IHN0cmluZztcblx0dXNlcklkRXF1YWw/IDogc3RyaW5nO1xuXHRzdGF0dXNFcXVhbD8gOiBLYWx0dXJhVXBsb2FkVG9rZW5TdGF0dXM7XG5cdHN0YXR1c0luPyA6IHN0cmluZztcblx0ZmlsZU5hbWVFcXVhbD8gOiBzdHJpbmc7XG5cdGZpbGVTaXplRXF1YWw/IDogbnVtYmVyO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhVXBsb2FkVG9rZW5CYXNlRmlsdGVyIGV4dGVuZHMgS2FsdHVyYUZpbHRlciB7XG5cbiAgICBpZEVxdWFsIDogc3RyaW5nO1xuXHRpZEluIDogc3RyaW5nO1xuXHR1c2VySWRFcXVhbCA6IHN0cmluZztcblx0c3RhdHVzRXF1YWwgOiBLYWx0dXJhVXBsb2FkVG9rZW5TdGF0dXM7XG5cdHN0YXR1c0luIDogc3RyaW5nO1xuXHRmaWxlTmFtZUVxdWFsIDogc3RyaW5nO1xuXHRmaWxlU2l6ZUVxdWFsIDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhVXBsb2FkVG9rZW5CYXNlRmlsdGVyQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFVcGxvYWRUb2tlbkJhc2VGaWx0ZXInIH0sXG5cdFx0XHRcdGlkRXF1YWwgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0aWRJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR1c2VySWRFcXVhbCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzdGF0dXNFcXVhbCA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFVcGxvYWRUb2tlblN0YXR1cywgc3ViVHlwZSA6ICdLYWx0dXJhVXBsb2FkVG9rZW5TdGF0dXMnIH0sXG5cdFx0XHRcdHN0YXR1c0luIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGZpbGVOYW1lRXF1YWwgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZmlsZVNpemVFcXVhbCA6IHsgdHlwZSA6ICduJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhVXBsb2FkVG9rZW5CYXNlRmlsdGVyJ10gPSBLYWx0dXJhVXBsb2FkVG9rZW5CYXNlRmlsdGVyOyJdfQ==