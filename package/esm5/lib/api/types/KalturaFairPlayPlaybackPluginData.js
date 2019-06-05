/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaDrmPlaybackPluginData } from './KalturaDrmPlaybackPluginData';
/**
 * @record
 */
export function KalturaFairPlayPlaybackPluginDataArgs() { }
/** @type {?|undefined} */
KalturaFairPlayPlaybackPluginDataArgs.prototype.certificate;
var KalturaFairPlayPlaybackPluginData = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaFairPlayPlaybackPluginData, _super);
    function KalturaFairPlayPlaybackPluginData(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaFairPlayPlaybackPluginData.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaFairPlayPlaybackPluginData' },
            certificate: { type: 's' }
        });
        return result;
    };
    return KalturaFairPlayPlaybackPluginData;
}(KalturaDrmPlaybackPluginData));
export { KalturaFairPlayPlaybackPluginData };
if (false) {
    /** @type {?} */
    KalturaFairPlayPlaybackPluginData.prototype.certificate;
}
typesMappingStorage['KalturaFairPlayPlaybackPluginData'] = KalturaFairPlayPlaybackPluginData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUZhaXJQbGF5UGxheWJhY2tQbHVnaW5EYXRhLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhRmFpclBsYXlQbGF5YmFja1BsdWdpbkRhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLDRCQUE0QixFQUFvQyxNQUFNLGdDQUFnQyxDQUFDOzs7Ozs7O0FBT2hILElBQUE7SUFBdUQsNkRBQTRCO0lBSS9FLDJDQUFZLElBQTZDO2VBRXJELGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsd0RBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsbUNBQW1DLEVBQUU7WUFDdEYsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNuQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCOzRDQTdCTDtFQVN1RCw0QkFBNEIsRUFxQmxGLENBQUE7QUFyQkQsNkNBcUJDOzs7OztBQUVELG1CQUFtQixDQUFDLG1DQUFtQyxDQUFDLEdBQUcsaUNBQWlDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYURybVBsYXliYWNrUGx1Z2luRGF0YSwgS2FsdHVyYURybVBsYXliYWNrUGx1Z2luRGF0YUFyZ3MgfSBmcm9tICcuL0thbHR1cmFEcm1QbGF5YmFja1BsdWdpbkRhdGEnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFGYWlyUGxheVBsYXliYWNrUGx1Z2luRGF0YUFyZ3MgIGV4dGVuZHMgS2FsdHVyYURybVBsYXliYWNrUGx1Z2luRGF0YUFyZ3Mge1xuICAgIGNlcnRpZmljYXRlPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUZhaXJQbGF5UGxheWJhY2tQbHVnaW5EYXRhIGV4dGVuZHMgS2FsdHVyYURybVBsYXliYWNrUGx1Z2luRGF0YSB7XG5cbiAgICBjZXJ0aWZpY2F0ZSA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUZhaXJQbGF5UGxheWJhY2tQbHVnaW5EYXRhQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFGYWlyUGxheVBsYXliYWNrUGx1Z2luRGF0YScgfSxcblx0XHRcdFx0Y2VydGlmaWNhdGUgOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUZhaXJQbGF5UGxheWJhY2tQbHVnaW5EYXRhJ10gPSBLYWx0dXJhRmFpclBsYXlQbGF5YmFja1BsdWdpbkRhdGE7Il19