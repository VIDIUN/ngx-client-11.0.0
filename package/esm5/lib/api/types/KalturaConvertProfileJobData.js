/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaJobData } from './KalturaJobData';
/**
 * @record
 */
export function KalturaConvertProfileJobDataArgs() { }
/** @type {?|undefined} */
KalturaConvertProfileJobDataArgs.prototype.inputFileSyncLocalPath;
/** @type {?|undefined} */
KalturaConvertProfileJobDataArgs.prototype.thumbHeight;
/** @type {?|undefined} */
KalturaConvertProfileJobDataArgs.prototype.thumbBitrate;
var KalturaConvertProfileJobData = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaConvertProfileJobData, _super);
    function KalturaConvertProfileJobData(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaConvertProfileJobData.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaConvertProfileJobData' },
            inputFileSyncLocalPath: { type: 's' },
            thumbHeight: { type: 'n' },
            thumbBitrate: { type: 'n' }
        });
        return result;
    };
    return KalturaConvertProfileJobData;
}(KalturaJobData));
export { KalturaConvertProfileJobData };
if (false) {
    /** @type {?} */
    KalturaConvertProfileJobData.prototype.inputFileSyncLocalPath;
    /** @type {?} */
    KalturaConvertProfileJobData.prototype.thumbHeight;
    /** @type {?} */
    KalturaConvertProfileJobData.prototype.thumbBitrate;
}
typesMappingStorage['KalturaConvertProfileJobData'] = KalturaConvertProfileJobData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUNvbnZlcnRQcm9maWxlSm9iRGF0YS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUNvbnZlcnRQcm9maWxlSm9iRGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLGtCQUFrQixDQUFDOzs7Ozs7Ozs7OztBQVN0RSxJQUFBO0lBQWtELHdEQUFjO0lBTTVELHNDQUFZLElBQXdDO2VBRWhELGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsbURBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsOEJBQThCLEVBQUU7WUFDakYsc0JBQXNCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3ZDLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUIsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNwQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO3VDQW5DTDtFQVdrRCxjQUFjLEVBeUIvRCxDQUFBO0FBekJELHdDQXlCQzs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsOEJBQThCLENBQUMsR0FBRyw0QkFBNEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhSm9iRGF0YSwgS2FsdHVyYUpvYkRhdGFBcmdzIH0gZnJvbSAnLi9LYWx0dXJhSm9iRGF0YSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUNvbnZlcnRQcm9maWxlSm9iRGF0YUFyZ3MgIGV4dGVuZHMgS2FsdHVyYUpvYkRhdGFBcmdzIHtcbiAgICBpbnB1dEZpbGVTeW5jTG9jYWxQYXRoPyA6IHN0cmluZztcblx0dGh1bWJIZWlnaHQ/IDogbnVtYmVyO1xuXHR0aHVtYkJpdHJhdGU/IDogbnVtYmVyO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhQ29udmVydFByb2ZpbGVKb2JEYXRhIGV4dGVuZHMgS2FsdHVyYUpvYkRhdGEge1xuXG4gICAgaW5wdXRGaWxlU3luY0xvY2FsUGF0aCA6IHN0cmluZztcblx0dGh1bWJIZWlnaHQgOiBudW1iZXI7XG5cdHRodW1iQml0cmF0ZSA6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUNvbnZlcnRQcm9maWxlSm9iRGF0YUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhQ29udmVydFByb2ZpbGVKb2JEYXRhJyB9LFxuXHRcdFx0XHRpbnB1dEZpbGVTeW5jTG9jYWxQYXRoIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHRodW1iSGVpZ2h0IDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHRodW1iQml0cmF0ZSA6IHsgdHlwZSA6ICduJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhQ29udmVydFByb2ZpbGVKb2JEYXRhJ10gPSBLYWx0dXJhQ29udmVydFByb2ZpbGVKb2JEYXRhOyJdfQ==