/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var KalturaLiveEntryServerNode = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaLiveEntryServerNode, _super);
    function KalturaLiveEntryServerNode(data) {
        var _this = _super.call(this, data) || this;
        if (typeof _this.streams === 'undefined')
            _this.streams = [];
        if (typeof _this.recordingInfo === 'undefined')
            _this.recordingInfo = [];
        return _this;
    }
    /**
     * @return {?}
     */
    KalturaLiveEntryServerNode.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaLiveEntryServerNode' },
            streams: { type: 'a', subTypeConstructor: KalturaLiveStreamParams, subType: 'KalturaLiveStreamParams' },
            recordingInfo: { type: 'a', subTypeConstructor: KalturaLiveEntryServerNodeRecordingInfo, subType: 'KalturaLiveEntryServerNodeRecordingInfo' },
            isPlayableUser: { type: 'b' }
        });
        return result;
    };
    return KalturaLiveEntryServerNode;
}(KalturaEntryServerNode));
export { KalturaLiveEntryServerNode };
if (false) {
    /** @type {?} */
    KalturaLiveEntryServerNode.prototype.streams;
    /** @type {?} */
    KalturaLiveEntryServerNode.prototype.recordingInfo;
    /** @type {?} */
    KalturaLiveEntryServerNode.prototype.isPlayableUser;
}
typesMappingStorage['KalturaLiveEntryServerNode'] = KalturaLiveEntryServerNode;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUxpdmVFbnRyeVNlcnZlck5vZGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFMaXZlRW50cnlTZXJ2ZXJOb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSx1Q0FBdUMsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ3BHLE9BQU8sRUFBRSxzQkFBc0IsRUFBOEIsTUFBTSwwQkFBMEIsQ0FBQzs7Ozs7Ozs7Ozs7QUFTOUYsSUFBQTtJQUFnRCxzREFBc0I7SUFNbEUsb0NBQVksSUFBc0M7UUFBbEQsWUFFSSxrQkFBTSxJQUFJLENBQUMsU0FHZDtRQUZHLEVBQUUsQ0FBQyxDQUFDLE9BQU8sS0FBSSxDQUFDLE9BQU8sS0FBSyxXQUFXLENBQUM7WUFBQyxLQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNqRSxFQUFFLENBQUMsQ0FBQyxPQUFPLEtBQUksQ0FBQyxhQUFhLEtBQUssV0FBVyxDQUFDO1lBQUMsS0FBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7O0tBQ3BFOzs7O0lBRVMsaURBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsNEJBQTRCLEVBQUU7WUFDL0UsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyx1QkFBdUIsRUFBRSxPQUFPLEVBQUcseUJBQXlCLEVBQUU7WUFDM0csYUFBYSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyx1Q0FBdUMsRUFBRSxPQUFPLEVBQUcseUNBQXlDLEVBQUU7WUFDakosY0FBYyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUN0QixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO3FDQXZDTDtFQWFnRCxzQkFBc0IsRUEyQnJFLENBQUE7QUEzQkQsc0NBMkJDOzs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyw0QkFBNEIsQ0FBQyxHQUFHLDBCQUEwQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFMaXZlU3RyZWFtUGFyYW1zIH0gZnJvbSAnLi9LYWx0dXJhTGl2ZVN0cmVhbVBhcmFtcyc7XG5pbXBvcnQgeyBLYWx0dXJhTGl2ZUVudHJ5U2VydmVyTm9kZVJlY29yZGluZ0luZm8gfSBmcm9tICcuL0thbHR1cmFMaXZlRW50cnlTZXJ2ZXJOb2RlUmVjb3JkaW5nSW5mbyc7XG5pbXBvcnQgeyBLYWx0dXJhRW50cnlTZXJ2ZXJOb2RlLCBLYWx0dXJhRW50cnlTZXJ2ZXJOb2RlQXJncyB9IGZyb20gJy4vS2FsdHVyYUVudHJ5U2VydmVyTm9kZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUxpdmVFbnRyeVNlcnZlck5vZGVBcmdzICBleHRlbmRzIEthbHR1cmFFbnRyeVNlcnZlck5vZGVBcmdzIHtcbiAgICBzdHJlYW1zPyA6IEthbHR1cmFMaXZlU3RyZWFtUGFyYW1zW107XG5cdHJlY29yZGluZ0luZm8/IDogS2FsdHVyYUxpdmVFbnRyeVNlcnZlck5vZGVSZWNvcmRpbmdJbmZvW107XG5cdGlzUGxheWFibGVVc2VyPyA6IGJvb2xlYW47XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFMaXZlRW50cnlTZXJ2ZXJOb2RlIGV4dGVuZHMgS2FsdHVyYUVudHJ5U2VydmVyTm9kZSB7XG5cbiAgICBzdHJlYW1zIDogS2FsdHVyYUxpdmVTdHJlYW1QYXJhbXNbXTtcblx0cmVjb3JkaW5nSW5mbyA6IEthbHR1cmFMaXZlRW50cnlTZXJ2ZXJOb2RlUmVjb3JkaW5nSW5mb1tdO1xuXHRpc1BsYXlhYmxlVXNlciA6IGJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFMaXZlRW50cnlTZXJ2ZXJOb2RlQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuc3RyZWFtcyA9PT0gJ3VuZGVmaW5lZCcpIHRoaXMuc3RyZWFtcyA9IFtdO1xuXHRcdGlmICh0eXBlb2YgdGhpcy5yZWNvcmRpbmdJbmZvID09PSAndW5kZWZpbmVkJykgdGhpcy5yZWNvcmRpbmdJbmZvID0gW107XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUxpdmVFbnRyeVNlcnZlck5vZGUnIH0sXG5cdFx0XHRcdHN0cmVhbXMgOiB7IHR5cGUgOiAnYScsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFMaXZlU3RyZWFtUGFyYW1zLCBzdWJUeXBlIDogJ0thbHR1cmFMaXZlU3RyZWFtUGFyYW1zJyB9LFxuXHRcdFx0XHRyZWNvcmRpbmdJbmZvIDogeyB0eXBlIDogJ2EnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhTGl2ZUVudHJ5U2VydmVyTm9kZVJlY29yZGluZ0luZm8sIHN1YlR5cGUgOiAnS2FsdHVyYUxpdmVFbnRyeVNlcnZlck5vZGVSZWNvcmRpbmdJbmZvJyB9LFxuXHRcdFx0XHRpc1BsYXlhYmxlVXNlciA6IHsgdHlwZSA6ICdiJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhTGl2ZUVudHJ5U2VydmVyTm9kZSddID0gS2FsdHVyYUxpdmVFbnRyeVNlcnZlck5vZGU7Il19