/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaEntryServerNodeRecordingStatus } from './KalturaEntryServerNodeRecordingStatus';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaLiveEntryServerNodeRecordingInfoArgs() { }
/** @type {?|undefined} */
KalturaLiveEntryServerNodeRecordingInfoArgs.prototype.recordedEntryId;
/** @type {?|undefined} */
KalturaLiveEntryServerNodeRecordingInfoArgs.prototype.duration;
/** @type {?|undefined} */
KalturaLiveEntryServerNodeRecordingInfoArgs.prototype.recordingStatus;
var KalturaLiveEntryServerNodeRecordingInfo = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaLiveEntryServerNodeRecordingInfo, _super);
    function KalturaLiveEntryServerNodeRecordingInfo(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaLiveEntryServerNodeRecordingInfo.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaLiveEntryServerNodeRecordingInfo' },
            recordedEntryId: { type: 's' },
            duration: { type: 'n' },
            recordingStatus: { type: 'en', subTypeConstructor: KalturaEntryServerNodeRecordingStatus, subType: 'KalturaEntryServerNodeRecordingStatus' }
        });
        return result;
    };
    return KalturaLiveEntryServerNodeRecordingInfo;
}(KalturaObjectBase));
export { KalturaLiveEntryServerNodeRecordingInfo };
if (false) {
    /** @type {?} */
    KalturaLiveEntryServerNodeRecordingInfo.prototype.recordedEntryId;
    /** @type {?} */
    KalturaLiveEntryServerNodeRecordingInfo.prototype.duration;
    /** @type {?} */
    KalturaLiveEntryServerNodeRecordingInfo.prototype.recordingStatus;
}
typesMappingStorage['KalturaLiveEntryServerNodeRecordingInfo'] = KalturaLiveEntryServerNodeRecordingInfo;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUxpdmVFbnRyeVNlcnZlck5vZGVSZWNvcmRpbmdJbmZvLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhTGl2ZUVudHJ5U2VydmVyTm9kZVJlY29yZGluZ0luZm8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHFDQUFxQyxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDaEcsT0FBTyxFQUFFLGlCQUFpQixFQUF5QixNQUFNLHdCQUF3QixDQUFDOzs7Ozs7Ozs7OztBQVNsRixJQUFBO0lBQTZELG1FQUFpQjtJQU0xRSxpREFBWSxJQUFtRDtlQUUzRCxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLDhEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHlDQUF5QyxFQUFFO1lBQzVGLGVBQWUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDaEMsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHFDQUFxQyxFQUFFLE9BQU8sRUFBRyx1Q0FBdUMsRUFBRTtTQUN2SSxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO2tEQXBDTDtFQVk2RCxpQkFBaUIsRUF5QjdFLENBQUE7QUF6QkQsbURBeUJDOzs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyx5Q0FBeUMsQ0FBQyxHQUFHLHVDQUF1QyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFFbnRyeVNlcnZlck5vZGVSZWNvcmRpbmdTdGF0dXMgfSBmcm9tICcuL0thbHR1cmFFbnRyeVNlcnZlck5vZGVSZWNvcmRpbmdTdGF0dXMnO1xuaW1wb3J0IHsgS2FsdHVyYU9iamVjdEJhc2UsIEthbHR1cmFPYmplY3RCYXNlQXJncyB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFMaXZlRW50cnlTZXJ2ZXJOb2RlUmVjb3JkaW5nSW5mb0FyZ3MgIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2VBcmdzIHtcbiAgICByZWNvcmRlZEVudHJ5SWQ/IDogc3RyaW5nO1xuXHRkdXJhdGlvbj8gOiBudW1iZXI7XG5cdHJlY29yZGluZ1N0YXR1cz8gOiBLYWx0dXJhRW50cnlTZXJ2ZXJOb2RlUmVjb3JkaW5nU3RhdHVzO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhTGl2ZUVudHJ5U2VydmVyTm9kZVJlY29yZGluZ0luZm8gZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZSB7XG5cbiAgICByZWNvcmRlZEVudHJ5SWQgOiBzdHJpbmc7XG5cdGR1cmF0aW9uIDogbnVtYmVyO1xuXHRyZWNvcmRpbmdTdGF0dXMgOiBLYWx0dXJhRW50cnlTZXJ2ZXJOb2RlUmVjb3JkaW5nU3RhdHVzO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhTGl2ZUVudHJ5U2VydmVyTm9kZVJlY29yZGluZ0luZm9BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUxpdmVFbnRyeVNlcnZlck5vZGVSZWNvcmRpbmdJbmZvJyB9LFxuXHRcdFx0XHRyZWNvcmRlZEVudHJ5SWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZHVyYXRpb24gOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0cmVjb3JkaW5nU3RhdHVzIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUVudHJ5U2VydmVyTm9kZVJlY29yZGluZ1N0YXR1cywgc3ViVHlwZSA6ICdLYWx0dXJhRW50cnlTZXJ2ZXJOb2RlUmVjb3JkaW5nU3RhdHVzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhTGl2ZUVudHJ5U2VydmVyTm9kZVJlY29yZGluZ0luZm8nXSA9IEthbHR1cmFMaXZlRW50cnlTZXJ2ZXJOb2RlUmVjb3JkaW5nSW5mbzsiXX0=