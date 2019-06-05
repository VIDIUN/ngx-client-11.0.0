/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaEntryServerNodeType } from './KalturaEntryServerNodeType';
import { KalturaJobData } from './KalturaJobData';
/**
 * @record
 */
export function KalturaConvertLiveSegmentJobDataArgs() { }
/** @type {?|undefined} */
KalturaConvertLiveSegmentJobDataArgs.prototype.entryId;
/** @type {?|undefined} */
KalturaConvertLiveSegmentJobDataArgs.prototype.assetId;
/** @type {?|undefined} */
KalturaConvertLiveSegmentJobDataArgs.prototype.mediaServerIndex;
/** @type {?|undefined} */
KalturaConvertLiveSegmentJobDataArgs.prototype.fileIndex;
/** @type {?|undefined} */
KalturaConvertLiveSegmentJobDataArgs.prototype.srcFilePath;
/** @type {?|undefined} */
KalturaConvertLiveSegmentJobDataArgs.prototype.destFilePath;
/** @type {?|undefined} */
KalturaConvertLiveSegmentJobDataArgs.prototype.endTime;
/** @type {?|undefined} */
KalturaConvertLiveSegmentJobDataArgs.prototype.destDataFilePath;
var KalturaConvertLiveSegmentJobData = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaConvertLiveSegmentJobData, _super);
    function KalturaConvertLiveSegmentJobData(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaConvertLiveSegmentJobData.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaConvertLiveSegmentJobData' },
            entryId: { type: 's' },
            assetId: { type: 's' },
            mediaServerIndex: { type: 'es', subTypeConstructor: KalturaEntryServerNodeType, subType: 'KalturaEntryServerNodeType' },
            fileIndex: { type: 'n' },
            srcFilePath: { type: 's' },
            destFilePath: { type: 's' },
            endTime: { type: 'n' },
            destDataFilePath: { type: 's' }
        });
        return result;
    };
    return KalturaConvertLiveSegmentJobData;
}(KalturaJobData));
export { KalturaConvertLiveSegmentJobData };
if (false) {
    /** @type {?} */
    KalturaConvertLiveSegmentJobData.prototype.entryId;
    /** @type {?} */
    KalturaConvertLiveSegmentJobData.prototype.assetId;
    /** @type {?} */
    KalturaConvertLiveSegmentJobData.prototype.mediaServerIndex;
    /** @type {?} */
    KalturaConvertLiveSegmentJobData.prototype.fileIndex;
    /** @type {?} */
    KalturaConvertLiveSegmentJobData.prototype.srcFilePath;
    /** @type {?} */
    KalturaConvertLiveSegmentJobData.prototype.destFilePath;
    /** @type {?} */
    KalturaConvertLiveSegmentJobData.prototype.endTime;
    /** @type {?} */
    KalturaConvertLiveSegmentJobData.prototype.destDataFilePath;
}
typesMappingStorage['KalturaConvertLiveSegmentJobData'] = KalturaConvertLiveSegmentJobData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUNvbnZlcnRMaXZlU2VnbWVudEpvYkRhdGEuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFDb252ZXJ0TGl2ZVNlZ21lbnRKb2JEYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzFFLE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sa0JBQWtCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWN0RSxJQUFBO0lBQXNELDREQUFjO0lBV2hFLDBDQUFZLElBQTRDO2VBRXBELGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsdURBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsa0NBQWtDLEVBQUU7WUFDckYsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QixPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hCLGdCQUFnQixFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRywwQkFBMEIsRUFBRSxPQUFPLEVBQUcsNEJBQTRCLEVBQUU7WUFDM0gsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQixXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVCLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDN0IsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QixnQkFBZ0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDeEIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjsyQ0FuREw7RUFpQnNELGNBQWMsRUFtQ25FLENBQUE7QUFuQ0QsNENBbUNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsa0NBQWtDLENBQUMsR0FBRyxnQ0FBZ0MsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhRW50cnlTZXJ2ZXJOb2RlVHlwZSB9IGZyb20gJy4vS2FsdHVyYUVudHJ5U2VydmVyTm9kZVR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYUpvYkRhdGEsIEthbHR1cmFKb2JEYXRhQXJncyB9IGZyb20gJy4vS2FsdHVyYUpvYkRhdGEnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFDb252ZXJ0TGl2ZVNlZ21lbnRKb2JEYXRhQXJncyAgZXh0ZW5kcyBLYWx0dXJhSm9iRGF0YUFyZ3Mge1xuICAgIGVudHJ5SWQ/IDogc3RyaW5nO1xuXHRhc3NldElkPyA6IHN0cmluZztcblx0bWVkaWFTZXJ2ZXJJbmRleD8gOiBLYWx0dXJhRW50cnlTZXJ2ZXJOb2RlVHlwZTtcblx0ZmlsZUluZGV4PyA6IG51bWJlcjtcblx0c3JjRmlsZVBhdGg/IDogc3RyaW5nO1xuXHRkZXN0RmlsZVBhdGg/IDogc3RyaW5nO1xuXHRlbmRUaW1lPyA6IG51bWJlcjtcblx0ZGVzdERhdGFGaWxlUGF0aD8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFDb252ZXJ0TGl2ZVNlZ21lbnRKb2JEYXRhIGV4dGVuZHMgS2FsdHVyYUpvYkRhdGEge1xuXG4gICAgZW50cnlJZCA6IHN0cmluZztcblx0YXNzZXRJZCA6IHN0cmluZztcblx0bWVkaWFTZXJ2ZXJJbmRleCA6IEthbHR1cmFFbnRyeVNlcnZlck5vZGVUeXBlO1xuXHRmaWxlSW5kZXggOiBudW1iZXI7XG5cdHNyY0ZpbGVQYXRoIDogc3RyaW5nO1xuXHRkZXN0RmlsZVBhdGggOiBzdHJpbmc7XG5cdGVuZFRpbWUgOiBudW1iZXI7XG5cdGRlc3REYXRhRmlsZVBhdGggOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFDb252ZXJ0TGl2ZVNlZ21lbnRKb2JEYXRhQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFDb252ZXJ0TGl2ZVNlZ21lbnRKb2JEYXRhJyB9LFxuXHRcdFx0XHRlbnRyeUlkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGFzc2V0SWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0bWVkaWFTZXJ2ZXJJbmRleCA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFFbnRyeVNlcnZlck5vZGVUeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFFbnRyeVNlcnZlck5vZGVUeXBlJyB9LFxuXHRcdFx0XHRmaWxlSW5kZXggOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0c3JjRmlsZVBhdGggOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZGVzdEZpbGVQYXRoIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGVuZFRpbWUgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0ZGVzdERhdGFGaWxlUGF0aCA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhQ29udmVydExpdmVTZWdtZW50Sm9iRGF0YSddID0gS2FsdHVyYUNvbnZlcnRMaXZlU2VnbWVudEpvYkRhdGE7Il19