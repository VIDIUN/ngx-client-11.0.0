/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaClipDescription } from './KalturaClipDescription';
import { KalturaJobData } from './KalturaJobData';
/**
 * @record
 */
export function KalturaCopyCaptionsJobDataArgs() { }
/** @type {?|undefined} */
KalturaCopyCaptionsJobDataArgs.prototype.entryId;
/** @type {?|undefined} */
KalturaCopyCaptionsJobDataArgs.prototype.clipsDescriptionArray;
/** @type {?|undefined} */
KalturaCopyCaptionsJobDataArgs.prototype.fullCopy;
var KalturaCopyCaptionsJobData = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaCopyCaptionsJobData, _super);
    function KalturaCopyCaptionsJobData(data) {
        var _this = _super.call(this, data) || this;
        if (typeof _this.clipsDescriptionArray === 'undefined')
            _this.clipsDescriptionArray = [];
        return _this;
    }
    /**
     * @return {?}
     */
    KalturaCopyCaptionsJobData.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaCopyCaptionsJobData' },
            entryId: { type: 's' },
            clipsDescriptionArray: { type: 'a', subTypeConstructor: KalturaClipDescription, subType: 'KalturaClipDescription' },
            fullCopy: { type: 'b' }
        });
        return result;
    };
    return KalturaCopyCaptionsJobData;
}(KalturaJobData));
export { KalturaCopyCaptionsJobData };
if (false) {
    /** @type {?} */
    KalturaCopyCaptionsJobData.prototype.entryId;
    /** @type {?} */
    KalturaCopyCaptionsJobData.prototype.clipsDescriptionArray;
    /** @type {?} */
    KalturaCopyCaptionsJobData.prototype.fullCopy;
}
typesMappingStorage['KalturaCopyCaptionsJobData'] = KalturaCopyCaptionsJobData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUNvcHlDYXB0aW9uc0pvYkRhdGEuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFDb3B5Q2FwdGlvbnNKb2JEYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sa0JBQWtCLENBQUM7Ozs7Ozs7Ozs7O0FBU3RFLElBQUE7SUFBZ0Qsc0RBQWM7SUFNMUQsb0NBQVksSUFBc0M7UUFBbEQsWUFFSSxrQkFBTSxJQUFJLENBQUMsU0FFZDtRQURHLEVBQUUsQ0FBQyxDQUFDLE9BQU8sS0FBSSxDQUFDLHFCQUFxQixLQUFLLFdBQVcsQ0FBQztZQUFDLEtBQUksQ0FBQyxxQkFBcUIsR0FBRyxFQUFFLENBQUM7O0tBQzFGOzs7O0lBRVMsaURBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsNEJBQTRCLEVBQUU7WUFDL0UsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QixxQkFBcUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsc0JBQXNCLEVBQUUsT0FBTyxFQUFHLHdCQUF3QixFQUFFO1lBQ3ZILFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDaEIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtxQ0FyQ0w7RUFZZ0QsY0FBYyxFQTBCN0QsQ0FBQTtBQTFCRCxzQ0EwQkM7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLDRCQUE0QixDQUFDLEdBQUcsMEJBQTBCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUNsaXBEZXNjcmlwdGlvbiB9IGZyb20gJy4vS2FsdHVyYUNsaXBEZXNjcmlwdGlvbic7XG5pbXBvcnQgeyBLYWx0dXJhSm9iRGF0YSwgS2FsdHVyYUpvYkRhdGFBcmdzIH0gZnJvbSAnLi9LYWx0dXJhSm9iRGF0YSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUNvcHlDYXB0aW9uc0pvYkRhdGFBcmdzICBleHRlbmRzIEthbHR1cmFKb2JEYXRhQXJncyB7XG4gICAgZW50cnlJZD8gOiBzdHJpbmc7XG5cdGNsaXBzRGVzY3JpcHRpb25BcnJheT8gOiBLYWx0dXJhQ2xpcERlc2NyaXB0aW9uW107XG5cdGZ1bGxDb3B5PyA6IGJvb2xlYW47XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFDb3B5Q2FwdGlvbnNKb2JEYXRhIGV4dGVuZHMgS2FsdHVyYUpvYkRhdGEge1xuXG4gICAgZW50cnlJZCA6IHN0cmluZztcblx0Y2xpcHNEZXNjcmlwdGlvbkFycmF5IDogS2FsdHVyYUNsaXBEZXNjcmlwdGlvbltdO1xuXHRmdWxsQ29weSA6IGJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFDb3B5Q2FwdGlvbnNKb2JEYXRhQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuY2xpcHNEZXNjcmlwdGlvbkFycmF5ID09PSAndW5kZWZpbmVkJykgdGhpcy5jbGlwc0Rlc2NyaXB0aW9uQXJyYXkgPSBbXTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhQ29weUNhcHRpb25zSm9iRGF0YScgfSxcblx0XHRcdFx0ZW50cnlJZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRjbGlwc0Rlc2NyaXB0aW9uQXJyYXkgOiB7IHR5cGUgOiAnYScsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFDbGlwRGVzY3JpcHRpb24sIHN1YlR5cGUgOiAnS2FsdHVyYUNsaXBEZXNjcmlwdGlvbicgfSxcblx0XHRcdFx0ZnVsbENvcHkgOiB7IHR5cGUgOiAnYicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUNvcHlDYXB0aW9uc0pvYkRhdGEnXSA9IEthbHR1cmFDb3B5Q2FwdGlvbnNKb2JEYXRhOyJdfQ==