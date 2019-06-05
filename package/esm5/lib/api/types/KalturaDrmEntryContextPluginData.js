/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaPluginData } from './KalturaPluginData';
/**
 * @record
 */
export function KalturaDrmEntryContextPluginDataArgs() { }
/** @type {?|undefined} */
KalturaDrmEntryContextPluginDataArgs.prototype.flavorData;
var KalturaDrmEntryContextPluginData = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaDrmEntryContextPluginData, _super);
    function KalturaDrmEntryContextPluginData(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaDrmEntryContextPluginData.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaDrmEntryContextPluginData' },
            flavorData: { type: 's' }
        });
        return result;
    };
    return KalturaDrmEntryContextPluginData;
}(KalturaPluginData));
export { KalturaDrmEntryContextPluginData };
if (false) {
    /** @type {?} */
    KalturaDrmEntryContextPluginData.prototype.flavorData;
}
typesMappingStorage['KalturaDrmEntryContextPluginData'] = KalturaDrmEntryContextPluginData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYURybUVudHJ5Q29udGV4dFBsdWdpbkRhdGEuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFEcm1FbnRyeUNvbnRleHRQbHVnaW5EYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxpQkFBaUIsRUFBeUIsTUFBTSxxQkFBcUIsQ0FBQzs7Ozs7OztBQU8vRSxJQUFBO0lBQXNELDREQUFpQjtJQUluRSwwQ0FBWSxJQUE0QztlQUVwRCxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLHVEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGtDQUFrQyxFQUFFO1lBQ3JGLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDbEIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjsyQ0E3Qkw7RUFTc0QsaUJBQWlCLEVBcUJ0RSxDQUFBO0FBckJELDRDQXFCQzs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxrQ0FBa0MsQ0FBQyxHQUFHLGdDQUFnQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFQbHVnaW5EYXRhLCBLYWx0dXJhUGx1Z2luRGF0YUFyZ3MgfSBmcm9tICcuL0thbHR1cmFQbHVnaW5EYXRhJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhRHJtRW50cnlDb250ZXh0UGx1Z2luRGF0YUFyZ3MgIGV4dGVuZHMgS2FsdHVyYVBsdWdpbkRhdGFBcmdzIHtcbiAgICBmbGF2b3JEYXRhPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYURybUVudHJ5Q29udGV4dFBsdWdpbkRhdGEgZXh0ZW5kcyBLYWx0dXJhUGx1Z2luRGF0YSB7XG5cbiAgICBmbGF2b3JEYXRhIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhRHJtRW50cnlDb250ZXh0UGx1Z2luRGF0YUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhRHJtRW50cnlDb250ZXh0UGx1Z2luRGF0YScgfSxcblx0XHRcdFx0Zmxhdm9yRGF0YSA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhRHJtRW50cnlDb250ZXh0UGx1Z2luRGF0YSddID0gS2FsdHVyYURybUVudHJ5Q29udGV4dFBsdWdpbkRhdGE7Il19