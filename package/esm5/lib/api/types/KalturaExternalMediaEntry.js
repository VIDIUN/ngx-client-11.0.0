/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaExternalMediaSourceType } from './KalturaExternalMediaSourceType';
import { KalturaMediaEntry } from './KalturaMediaEntry';
/**
 * @record
 */
export function KalturaExternalMediaEntryArgs() { }
/** @type {?|undefined} */
KalturaExternalMediaEntryArgs.prototype.externalSourceType;
var KalturaExternalMediaEntry = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaExternalMediaEntry, _super);
    function KalturaExternalMediaEntry(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaExternalMediaEntry.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaExternalMediaEntry' },
            externalSourceType: { type: 'es', subTypeConstructor: KalturaExternalMediaSourceType, subType: 'KalturaExternalMediaSourceType' },
            assetParamsIds: { type: 's', readOnly: true }
        });
        return result;
    };
    return KalturaExternalMediaEntry;
}(KalturaMediaEntry));
export { KalturaExternalMediaEntry };
if (false) {
    /** @type {?} */
    KalturaExternalMediaEntry.prototype.externalSourceType;
    /** @type {?} */
    KalturaExternalMediaEntry.prototype.assetParamsIds;
}
typesMappingStorage['KalturaExternalMediaEntry'] = KalturaExternalMediaEntry;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUV4dGVybmFsTWVkaWFFbnRyeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUV4dGVybmFsTWVkaWFFbnRyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNsRixPQUFPLEVBQUUsaUJBQWlCLEVBQXlCLE1BQU0scUJBQXFCLENBQUM7Ozs7Ozs7QUFPL0UsSUFBQTtJQUErQyxxREFBaUI7SUFLNUQsbUNBQVksSUFBcUM7ZUFFN0Msa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyxnREFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRywyQkFBMkIsRUFBRTtZQUM5RSxrQkFBa0IsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsOEJBQThCLEVBQUUsT0FBTyxFQUFHLGdDQUFnQyxFQUFFO1lBQ3JJLGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtTQUN2QyxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO29DQWhDTDtFQVUrQyxpQkFBaUIsRUF1Qi9ELENBQUE7QUF2QkQscUNBdUJDOzs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsMkJBQTJCLENBQUMsR0FBRyx5QkFBeUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhRXh0ZXJuYWxNZWRpYVNvdXJjZVR5cGUgfSBmcm9tICcuL0thbHR1cmFFeHRlcm5hbE1lZGlhU291cmNlVHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhTWVkaWFFbnRyeSwgS2FsdHVyYU1lZGlhRW50cnlBcmdzIH0gZnJvbSAnLi9LYWx0dXJhTWVkaWFFbnRyeSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUV4dGVybmFsTWVkaWFFbnRyeUFyZ3MgIGV4dGVuZHMgS2FsdHVyYU1lZGlhRW50cnlBcmdzIHtcbiAgICBleHRlcm5hbFNvdXJjZVR5cGU/IDogS2FsdHVyYUV4dGVybmFsTWVkaWFTb3VyY2VUeXBlO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhRXh0ZXJuYWxNZWRpYUVudHJ5IGV4dGVuZHMgS2FsdHVyYU1lZGlhRW50cnkge1xuXG4gICAgZXh0ZXJuYWxTb3VyY2VUeXBlIDogS2FsdHVyYUV4dGVybmFsTWVkaWFTb3VyY2VUeXBlO1xuXHRyZWFkb25seSBhc3NldFBhcmFtc0lkcyA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUV4dGVybmFsTWVkaWFFbnRyeUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhRXh0ZXJuYWxNZWRpYUVudHJ5JyB9LFxuXHRcdFx0XHRleHRlcm5hbFNvdXJjZVR5cGUgOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRXh0ZXJuYWxNZWRpYVNvdXJjZVR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYUV4dGVybmFsTWVkaWFTb3VyY2VUeXBlJyB9LFxuXHRcdFx0XHRhc3NldFBhcmFtc0lkcyA6IHsgdHlwZSA6ICdzJywgcmVhZE9ubHkgOiB0cnVlIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFFeHRlcm5hbE1lZGlhRW50cnknXSA9IEthbHR1cmFFeHRlcm5hbE1lZGlhRW50cnk7Il19