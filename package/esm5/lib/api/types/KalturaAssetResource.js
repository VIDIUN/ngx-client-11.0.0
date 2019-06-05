/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaContentResource } from './KalturaContentResource';
/**
 * @record
 */
export function KalturaAssetResourceArgs() { }
/** @type {?|undefined} */
KalturaAssetResourceArgs.prototype.assetId;
var KalturaAssetResource = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaAssetResource, _super);
    function KalturaAssetResource(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaAssetResource.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaAssetResource' },
            assetId: { type: 's' }
        });
        return result;
    };
    return KalturaAssetResource;
}(KalturaContentResource));
export { KalturaAssetResource };
if (false) {
    /** @type {?} */
    KalturaAssetResource.prototype.assetId;
}
typesMappingStorage['KalturaAssetResource'] = KalturaAssetResource;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUFzc2V0UmVzb3VyY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFBc3NldFJlc291cmNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxzQkFBc0IsRUFBOEIsTUFBTSwwQkFBMEIsQ0FBQzs7Ozs7OztBQU85RixJQUFBO0lBQTBDLGdEQUFzQjtJQUk1RCw4QkFBWSxJQUFnQztlQUV4QyxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLDJDQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHNCQUFzQixFQUFFO1lBQ3pFLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDZixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCOytCQTdCTDtFQVMwQyxzQkFBc0IsRUFxQi9ELENBQUE7QUFyQkQsZ0NBcUJDOzs7OztBQUVELG1CQUFtQixDQUFDLHNCQUFzQixDQUFDLEdBQUcsb0JBQW9CLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUNvbnRlbnRSZXNvdXJjZSwgS2FsdHVyYUNvbnRlbnRSZXNvdXJjZUFyZ3MgfSBmcm9tICcuL0thbHR1cmFDb250ZW50UmVzb3VyY2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFBc3NldFJlc291cmNlQXJncyAgZXh0ZW5kcyBLYWx0dXJhQ29udGVudFJlc291cmNlQXJncyB7XG4gICAgYXNzZXRJZD8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFBc3NldFJlc291cmNlIGV4dGVuZHMgS2FsdHVyYUNvbnRlbnRSZXNvdXJjZSB7XG5cbiAgICBhc3NldElkIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhQXNzZXRSZXNvdXJjZUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhQXNzZXRSZXNvdXJjZScgfSxcblx0XHRcdFx0YXNzZXRJZCA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhQXNzZXRSZXNvdXJjZSddID0gS2FsdHVyYUFzc2V0UmVzb3VyY2U7Il19