/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
export class KalturaLiveEntryServerNodeRecordingInfo extends KalturaObjectBase {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaLiveEntryServerNodeRecordingInfo' },
            recordedEntryId: { type: 's' },
            duration: { type: 'n' },
            recordingStatus: { type: 'en', subTypeConstructor: KalturaEntryServerNodeRecordingStatus, subType: 'KalturaEntryServerNodeRecordingStatus' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaLiveEntryServerNodeRecordingInfo.prototype.recordedEntryId;
    /** @type {?} */
    KalturaLiveEntryServerNodeRecordingInfo.prototype.duration;
    /** @type {?} */
    KalturaLiveEntryServerNodeRecordingInfo.prototype.recordingStatus;
}
typesMappingStorage['KalturaLiveEntryServerNodeRecordingInfo'] = KalturaLiveEntryServerNodeRecordingInfo;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUxpdmVFbnRyeVNlcnZlck5vZGVSZWNvcmRpbmdJbmZvLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhTGl2ZUVudHJ5U2VydmVyTm9kZVJlY29yZGluZ0luZm8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUscUNBQXFDLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUNoRyxPQUFPLEVBQUUsaUJBQWlCLEVBQXlCLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7Ozs7O0FBU2xGLE1BQU0sOENBQStDLFNBQVEsaUJBQWlCOzs7O0lBTTFFLFlBQVksSUFBbUQ7UUFFM0QsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHlDQUF5QyxFQUFFO1lBQzVGLGVBQWUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDaEMsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHFDQUFxQyxFQUFFLE9BQU8sRUFBRyx1Q0FBdUMsRUFBRTtTQUN2SSxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLHlDQUF5QyxDQUFDLEdBQUcsdUNBQXVDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUVudHJ5U2VydmVyTm9kZVJlY29yZGluZ1N0YXR1cyB9IGZyb20gJy4vS2FsdHVyYUVudHJ5U2VydmVyTm9kZVJlY29yZGluZ1N0YXR1cyc7XG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0QmFzZSwgS2FsdHVyYU9iamVjdEJhc2VBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUxpdmVFbnRyeVNlcnZlck5vZGVSZWNvcmRpbmdJbmZvQXJncyAgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZUFyZ3Mge1xuICAgIHJlY29yZGVkRW50cnlJZD8gOiBzdHJpbmc7XG5cdGR1cmF0aW9uPyA6IG51bWJlcjtcblx0cmVjb3JkaW5nU3RhdHVzPyA6IEthbHR1cmFFbnRyeVNlcnZlck5vZGVSZWNvcmRpbmdTdGF0dXM7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFMaXZlRW50cnlTZXJ2ZXJOb2RlUmVjb3JkaW5nSW5mbyBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlIHtcblxuICAgIHJlY29yZGVkRW50cnlJZCA6IHN0cmluZztcblx0ZHVyYXRpb24gOiBudW1iZXI7XG5cdHJlY29yZGluZ1N0YXR1cyA6IEthbHR1cmFFbnRyeVNlcnZlck5vZGVSZWNvcmRpbmdTdGF0dXM7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFMaXZlRW50cnlTZXJ2ZXJOb2RlUmVjb3JkaW5nSW5mb0FyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhTGl2ZUVudHJ5U2VydmVyTm9kZVJlY29yZGluZ0luZm8nIH0sXG5cdFx0XHRcdHJlY29yZGVkRW50cnlJZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRkdXJhdGlvbiA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRyZWNvcmRpbmdTdGF0dXMgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRW50cnlTZXJ2ZXJOb2RlUmVjb3JkaW5nU3RhdHVzLCBzdWJUeXBlIDogJ0thbHR1cmFFbnRyeVNlcnZlck5vZGVSZWNvcmRpbmdTdGF0dXMnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFMaXZlRW50cnlTZXJ2ZXJOb2RlUmVjb3JkaW5nSW5mbyddID0gS2FsdHVyYUxpdmVFbnRyeVNlcnZlck5vZGVSZWNvcmRpbmdJbmZvOyJdfQ==