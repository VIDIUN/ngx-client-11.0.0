/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaLiveChannelSegmentType } from './KalturaLiveChannelSegmentType';
import { KalturaLiveChannelSegmentStatus } from './KalturaLiveChannelSegmentStatus';
import { KalturaLiveChannelSegmentTriggerType } from './KalturaLiveChannelSegmentTriggerType';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaLiveChannelSegmentArgs() { }
/** @type {?|undefined} */
KalturaLiveChannelSegmentArgs.prototype.name;
/** @type {?|undefined} */
KalturaLiveChannelSegmentArgs.prototype.description;
/** @type {?|undefined} */
KalturaLiveChannelSegmentArgs.prototype.tags;
/** @type {?|undefined} */
KalturaLiveChannelSegmentArgs.prototype.type;
/** @type {?|undefined} */
KalturaLiveChannelSegmentArgs.prototype.channelId;
/** @type {?|undefined} */
KalturaLiveChannelSegmentArgs.prototype.entryId;
/** @type {?|undefined} */
KalturaLiveChannelSegmentArgs.prototype.triggerType;
/** @type {?|undefined} */
KalturaLiveChannelSegmentArgs.prototype.triggerSegmentId;
/** @type {?|undefined} */
KalturaLiveChannelSegmentArgs.prototype.startTime;
/** @type {?|undefined} */
KalturaLiveChannelSegmentArgs.prototype.duration;
export class KalturaLiveChannelSegment extends KalturaObjectBase {
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
            objectType: { type: 'c', default: 'KalturaLiveChannelSegment' },
            id: { type: 'n', readOnly: true },
            partnerId: { type: 'n', readOnly: true },
            createdAt: { type: 'n', readOnly: true },
            updatedAt: { type: 'n', readOnly: true },
            name: { type: 's' },
            description: { type: 's' },
            tags: { type: 's' },
            type: { type: 'es', subTypeConstructor: KalturaLiveChannelSegmentType, subType: 'KalturaLiveChannelSegmentType' },
            status: { type: 'es', readOnly: true, subTypeConstructor: KalturaLiveChannelSegmentStatus, subType: 'KalturaLiveChannelSegmentStatus' },
            channelId: { type: 's' },
            entryId: { type: 's' },
            triggerType: { type: 'es', subTypeConstructor: KalturaLiveChannelSegmentTriggerType, subType: 'KalturaLiveChannelSegmentTriggerType' },
            triggerSegmentId: { type: 'n' },
            startTime: { type: 'n' },
            duration: { type: 'n' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaLiveChannelSegment.prototype.id;
    /** @type {?} */
    KalturaLiveChannelSegment.prototype.partnerId;
    /** @type {?} */
    KalturaLiveChannelSegment.prototype.createdAt;
    /** @type {?} */
    KalturaLiveChannelSegment.prototype.updatedAt;
    /** @type {?} */
    KalturaLiveChannelSegment.prototype.name;
    /** @type {?} */
    KalturaLiveChannelSegment.prototype.description;
    /** @type {?} */
    KalturaLiveChannelSegment.prototype.tags;
    /** @type {?} */
    KalturaLiveChannelSegment.prototype.type;
    /** @type {?} */
    KalturaLiveChannelSegment.prototype.status;
    /** @type {?} */
    KalturaLiveChannelSegment.prototype.channelId;
    /** @type {?} */
    KalturaLiveChannelSegment.prototype.entryId;
    /** @type {?} */
    KalturaLiveChannelSegment.prototype.triggerType;
    /** @type {?} */
    KalturaLiveChannelSegment.prototype.triggerSegmentId;
    /** @type {?} */
    KalturaLiveChannelSegment.prototype.startTime;
    /** @type {?} */
    KalturaLiveChannelSegment.prototype.duration;
}
typesMappingStorage['KalturaLiveChannelSegment'] = KalturaLiveChannelSegment;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUxpdmVDaGFubmVsU2VnbWVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUxpdmVDaGFubmVsU2VnbWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxvQ0FBb0MsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzlGLE9BQU8sRUFBRSxpQkFBaUIsRUFBeUIsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdCbEYsTUFBTSxnQ0FBaUMsU0FBUSxpQkFBaUI7Ozs7SUFrQjVELFlBQVksSUFBcUM7UUFFN0MsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDJCQUEyQixFQUFFO1lBQzlFLEVBQUUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUNwQyxTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDM0MsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQzNDLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUMzQyxJQUFJLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3JCLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUIsSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNyQixJQUFJLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLDZCQUE2QixFQUFFLE9BQU8sRUFBRywrQkFBK0IsRUFBRTtZQUNySCxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsK0JBQStCLEVBQUUsT0FBTyxFQUFHLGlDQUFpQyxFQUFFO1lBQzVJLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUIsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QixXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLG9DQUFvQyxFQUFFLE9BQU8sRUFBRyxzQ0FBc0MsRUFBRTtZQUMxSSxnQkFBZ0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDakMsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ2hCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsMkJBQTJCLENBQUMsR0FBRyx5QkFBeUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhTGl2ZUNoYW5uZWxTZWdtZW50VHlwZSB9IGZyb20gJy4vS2FsdHVyYUxpdmVDaGFubmVsU2VnbWVudFR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYUxpdmVDaGFubmVsU2VnbWVudFN0YXR1cyB9IGZyb20gJy4vS2FsdHVyYUxpdmVDaGFubmVsU2VnbWVudFN0YXR1cyc7XG5pbXBvcnQgeyBLYWx0dXJhTGl2ZUNoYW5uZWxTZWdtZW50VHJpZ2dlclR5cGUgfSBmcm9tICcuL0thbHR1cmFMaXZlQ2hhbm5lbFNlZ21lbnRUcmlnZ2VyVHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0QmFzZSwgS2FsdHVyYU9iamVjdEJhc2VBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUxpdmVDaGFubmVsU2VnbWVudEFyZ3MgIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2VBcmdzIHtcbiAgICBuYW1lPyA6IHN0cmluZztcblx0ZGVzY3JpcHRpb24/IDogc3RyaW5nO1xuXHR0YWdzPyA6IHN0cmluZztcblx0dHlwZT8gOiBLYWx0dXJhTGl2ZUNoYW5uZWxTZWdtZW50VHlwZTtcblx0Y2hhbm5lbElkPyA6IHN0cmluZztcblx0ZW50cnlJZD8gOiBzdHJpbmc7XG5cdHRyaWdnZXJUeXBlPyA6IEthbHR1cmFMaXZlQ2hhbm5lbFNlZ21lbnRUcmlnZ2VyVHlwZTtcblx0dHJpZ2dlclNlZ21lbnRJZD8gOiBudW1iZXI7XG5cdHN0YXJ0VGltZT8gOiBudW1iZXI7XG5cdGR1cmF0aW9uPyA6IG51bWJlcjtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUxpdmVDaGFubmVsU2VnbWVudCBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlIHtcblxuICAgIHJlYWRvbmx5IGlkIDogbnVtYmVyO1xuXHRyZWFkb25seSBwYXJ0bmVySWQgOiBudW1iZXI7XG5cdHJlYWRvbmx5IGNyZWF0ZWRBdCA6IG51bWJlcjtcblx0cmVhZG9ubHkgdXBkYXRlZEF0IDogbnVtYmVyO1xuXHRuYW1lIDogc3RyaW5nO1xuXHRkZXNjcmlwdGlvbiA6IHN0cmluZztcblx0dGFncyA6IHN0cmluZztcblx0dHlwZSA6IEthbHR1cmFMaXZlQ2hhbm5lbFNlZ21lbnRUeXBlO1xuXHRyZWFkb25seSBzdGF0dXMgOiBLYWx0dXJhTGl2ZUNoYW5uZWxTZWdtZW50U3RhdHVzO1xuXHRjaGFubmVsSWQgOiBzdHJpbmc7XG5cdGVudHJ5SWQgOiBzdHJpbmc7XG5cdHRyaWdnZXJUeXBlIDogS2FsdHVyYUxpdmVDaGFubmVsU2VnbWVudFRyaWdnZXJUeXBlO1xuXHR0cmlnZ2VyU2VnbWVudElkIDogbnVtYmVyO1xuXHRzdGFydFRpbWUgOiBudW1iZXI7XG5cdGR1cmF0aW9uIDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhTGl2ZUNoYW5uZWxTZWdtZW50QXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFMaXZlQ2hhbm5lbFNlZ21lbnQnIH0sXG5cdFx0XHRcdGlkIDogeyB0eXBlIDogJ24nLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0cGFydG5lcklkIDogeyB0eXBlIDogJ24nLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0Y3JlYXRlZEF0IDogeyB0eXBlIDogJ24nLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0dXBkYXRlZEF0IDogeyB0eXBlIDogJ24nLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0bmFtZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRkZXNjcmlwdGlvbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR0YWdzIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHR5cGUgOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhTGl2ZUNoYW5uZWxTZWdtZW50VHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhTGl2ZUNoYW5uZWxTZWdtZW50VHlwZScgfSxcblx0XHRcdFx0c3RhdHVzIDogeyB0eXBlIDogJ2VzJywgcmVhZE9ubHkgOiB0cnVlLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhTGl2ZUNoYW5uZWxTZWdtZW50U3RhdHVzLCBzdWJUeXBlIDogJ0thbHR1cmFMaXZlQ2hhbm5lbFNlZ21lbnRTdGF0dXMnIH0sXG5cdFx0XHRcdGNoYW5uZWxJZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRlbnRyeUlkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHRyaWdnZXJUeXBlIDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUxpdmVDaGFubmVsU2VnbWVudFRyaWdnZXJUeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFMaXZlQ2hhbm5lbFNlZ21lbnRUcmlnZ2VyVHlwZScgfSxcblx0XHRcdFx0dHJpZ2dlclNlZ21lbnRJZCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRzdGFydFRpbWUgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0ZHVyYXRpb24gOiB7IHR5cGUgOiAnbicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUxpdmVDaGFubmVsU2VnbWVudCddID0gS2FsdHVyYUxpdmVDaGFubmVsU2VnbWVudDsiXX0=