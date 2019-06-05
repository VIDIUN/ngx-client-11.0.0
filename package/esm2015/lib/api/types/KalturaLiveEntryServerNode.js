/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaLiveStreamParams } from './KalturaLiveStreamParams';
import { KalturaLiveEntryServerNodeRecordingInfo } from './KalturaLiveEntryServerNodeRecordingInfo';
import { KalturaEntryServerNode } from './KalturaEntryServerNode';
/**
 * @record
 */
export function KalturaLiveEntryServerNodeArgs() { }
/** @type {?|undefined} */
KalturaLiveEntryServerNodeArgs.prototype.streams;
/** @type {?|undefined} */
KalturaLiveEntryServerNodeArgs.prototype.recordingInfo;
/** @type {?|undefined} */
KalturaLiveEntryServerNodeArgs.prototype.isPlayableUser;
export class KalturaLiveEntryServerNode extends KalturaEntryServerNode {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
        if (typeof this.streams === 'undefined')
            this.streams = [];
        if (typeof this.recordingInfo === 'undefined')
            this.recordingInfo = [];
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaLiveEntryServerNode' },
            streams: { type: 'a', subTypeConstructor: KalturaLiveStreamParams, subType: 'KalturaLiveStreamParams' },
            recordingInfo: { type: 'a', subTypeConstructor: KalturaLiveEntryServerNodeRecordingInfo, subType: 'KalturaLiveEntryServerNodeRecordingInfo' },
            isPlayableUser: { type: 'b' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaLiveEntryServerNode.prototype.streams;
    /** @type {?} */
    KalturaLiveEntryServerNode.prototype.recordingInfo;
    /** @type {?} */
    KalturaLiveEntryServerNode.prototype.isPlayableUser;
}
typesMappingStorage['KalturaLiveEntryServerNode'] = KalturaLiveEntryServerNode;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUxpdmVFbnRyeVNlcnZlck5vZGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFMaXZlRW50cnlTZXJ2ZXJOb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDcEUsT0FBTyxFQUFFLHVDQUF1QyxFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDcEcsT0FBTyxFQUFFLHNCQUFzQixFQUE4QixNQUFNLDBCQUEwQixDQUFDOzs7Ozs7Ozs7OztBQVM5RixNQUFNLGlDQUFrQyxTQUFRLHNCQUFzQjs7OztJQU1sRSxZQUFZLElBQXNDO1FBRTlDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNaLEVBQUUsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLE9BQU8sS0FBSyxXQUFXLENBQUM7WUFBQyxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNqRSxFQUFFLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxhQUFhLEtBQUssV0FBVyxDQUFDO1lBQUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7S0FDcEU7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDRCQUE0QixFQUFFO1lBQy9FLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsdUJBQXVCLEVBQUUsT0FBTyxFQUFHLHlCQUF5QixFQUFFO1lBQzNHLGFBQWEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsdUNBQXVDLEVBQUUsT0FBTyxFQUFHLHlDQUF5QyxFQUFFO1lBQ2pKLGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDdEIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyw0QkFBNEIsQ0FBQyxHQUFHLDBCQUEwQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFMaXZlU3RyZWFtUGFyYW1zIH0gZnJvbSAnLi9LYWx0dXJhTGl2ZVN0cmVhbVBhcmFtcyc7XG5pbXBvcnQgeyBLYWx0dXJhTGl2ZUVudHJ5U2VydmVyTm9kZVJlY29yZGluZ0luZm8gfSBmcm9tICcuL0thbHR1cmFMaXZlRW50cnlTZXJ2ZXJOb2RlUmVjb3JkaW5nSW5mbyc7XG5pbXBvcnQgeyBLYWx0dXJhRW50cnlTZXJ2ZXJOb2RlLCBLYWx0dXJhRW50cnlTZXJ2ZXJOb2RlQXJncyB9IGZyb20gJy4vS2FsdHVyYUVudHJ5U2VydmVyTm9kZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUxpdmVFbnRyeVNlcnZlck5vZGVBcmdzICBleHRlbmRzIEthbHR1cmFFbnRyeVNlcnZlck5vZGVBcmdzIHtcbiAgICBzdHJlYW1zPyA6IEthbHR1cmFMaXZlU3RyZWFtUGFyYW1zW107XG5cdHJlY29yZGluZ0luZm8/IDogS2FsdHVyYUxpdmVFbnRyeVNlcnZlck5vZGVSZWNvcmRpbmdJbmZvW107XG5cdGlzUGxheWFibGVVc2VyPyA6IGJvb2xlYW47XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFMaXZlRW50cnlTZXJ2ZXJOb2RlIGV4dGVuZHMgS2FsdHVyYUVudHJ5U2VydmVyTm9kZSB7XG5cbiAgICBzdHJlYW1zIDogS2FsdHVyYUxpdmVTdHJlYW1QYXJhbXNbXTtcblx0cmVjb3JkaW5nSW5mbyA6IEthbHR1cmFMaXZlRW50cnlTZXJ2ZXJOb2RlUmVjb3JkaW5nSW5mb1tdO1xuXHRpc1BsYXlhYmxlVXNlciA6IGJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFMaXZlRW50cnlTZXJ2ZXJOb2RlQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuc3RyZWFtcyA9PT0gJ3VuZGVmaW5lZCcpIHRoaXMuc3RyZWFtcyA9IFtdO1xuXHRcdGlmICh0eXBlb2YgdGhpcy5yZWNvcmRpbmdJbmZvID09PSAndW5kZWZpbmVkJykgdGhpcy5yZWNvcmRpbmdJbmZvID0gW107XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUxpdmVFbnRyeVNlcnZlck5vZGUnIH0sXG5cdFx0XHRcdHN0cmVhbXMgOiB7IHR5cGUgOiAnYScsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFMaXZlU3RyZWFtUGFyYW1zLCBzdWJUeXBlIDogJ0thbHR1cmFMaXZlU3RyZWFtUGFyYW1zJyB9LFxuXHRcdFx0XHRyZWNvcmRpbmdJbmZvIDogeyB0eXBlIDogJ2EnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhTGl2ZUVudHJ5U2VydmVyTm9kZVJlY29yZGluZ0luZm8sIHN1YlR5cGUgOiAnS2FsdHVyYUxpdmVFbnRyeVNlcnZlck5vZGVSZWNvcmRpbmdJbmZvJyB9LFxuXHRcdFx0XHRpc1BsYXlhYmxlVXNlciA6IHsgdHlwZSA6ICdiJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhTGl2ZUVudHJ5U2VydmVyTm9kZSddID0gS2FsdHVyYUxpdmVFbnRyeVNlcnZlck5vZGU7Il19