/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var KalturaLiveChannelSegment = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaLiveChannelSegment, _super);
    function KalturaLiveChannelSegment(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaLiveChannelSegment.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
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
    };
    return KalturaLiveChannelSegment;
}(KalturaObjectBase));
export { KalturaLiveChannelSegment };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUxpdmVDaGFubmVsU2VnbWVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUxpdmVDaGFubmVsU2VnbWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNoRixPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNwRixPQUFPLEVBQUUsb0NBQW9DLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUM5RixPQUFPLEVBQUUsaUJBQWlCLEVBQXlCLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQmxGLElBQUE7SUFBK0MscURBQWlCO0lBa0I1RCxtQ0FBWSxJQUFxQztlQUU3QyxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLGdEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDJCQUEyQixFQUFFO1lBQzlFLEVBQUUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUNwQyxTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDM0MsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQzNDLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUMzQyxJQUFJLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3JCLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUIsSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNyQixJQUFJLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLDZCQUE2QixFQUFFLE9BQU8sRUFBRywrQkFBK0IsRUFBRTtZQUNySCxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsK0JBQStCLEVBQUUsT0FBTyxFQUFHLGlDQUFpQyxFQUFFO1lBQzVJLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUIsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QixXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLG9DQUFvQyxFQUFFLE9BQU8sRUFBRyxzQ0FBc0MsRUFBRTtZQUMxSSxnQkFBZ0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDakMsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ2hCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7b0NBckVMO0VBcUIrQyxpQkFBaUIsRUFpRC9ELENBQUE7QUFqREQscUNBaURDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQywyQkFBMkIsQ0FBQyxHQUFHLHlCQUF5QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFMaXZlQ2hhbm5lbFNlZ21lbnRUeXBlIH0gZnJvbSAnLi9LYWx0dXJhTGl2ZUNoYW5uZWxTZWdtZW50VHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhTGl2ZUNoYW5uZWxTZWdtZW50U3RhdHVzIH0gZnJvbSAnLi9LYWx0dXJhTGl2ZUNoYW5uZWxTZWdtZW50U3RhdHVzJztcbmltcG9ydCB7IEthbHR1cmFMaXZlQ2hhbm5lbFNlZ21lbnRUcmlnZ2VyVHlwZSB9IGZyb20gJy4vS2FsdHVyYUxpdmVDaGFubmVsU2VnbWVudFRyaWdnZXJUeXBlJztcbmltcG9ydCB7IEthbHR1cmFPYmplY3RCYXNlLCBLYWx0dXJhT2JqZWN0QmFzZUFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhTGl2ZUNoYW5uZWxTZWdtZW50QXJncyAgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZUFyZ3Mge1xuICAgIG5hbWU/IDogc3RyaW5nO1xuXHRkZXNjcmlwdGlvbj8gOiBzdHJpbmc7XG5cdHRhZ3M/IDogc3RyaW5nO1xuXHR0eXBlPyA6IEthbHR1cmFMaXZlQ2hhbm5lbFNlZ21lbnRUeXBlO1xuXHRjaGFubmVsSWQ/IDogc3RyaW5nO1xuXHRlbnRyeUlkPyA6IHN0cmluZztcblx0dHJpZ2dlclR5cGU/IDogS2FsdHVyYUxpdmVDaGFubmVsU2VnbWVudFRyaWdnZXJUeXBlO1xuXHR0cmlnZ2VyU2VnbWVudElkPyA6IG51bWJlcjtcblx0c3RhcnRUaW1lPyA6IG51bWJlcjtcblx0ZHVyYXRpb24/IDogbnVtYmVyO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhTGl2ZUNoYW5uZWxTZWdtZW50IGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2Uge1xuXG4gICAgcmVhZG9ubHkgaWQgOiBudW1iZXI7XG5cdHJlYWRvbmx5IHBhcnRuZXJJZCA6IG51bWJlcjtcblx0cmVhZG9ubHkgY3JlYXRlZEF0IDogbnVtYmVyO1xuXHRyZWFkb25seSB1cGRhdGVkQXQgOiBudW1iZXI7XG5cdG5hbWUgOiBzdHJpbmc7XG5cdGRlc2NyaXB0aW9uIDogc3RyaW5nO1xuXHR0YWdzIDogc3RyaW5nO1xuXHR0eXBlIDogS2FsdHVyYUxpdmVDaGFubmVsU2VnbWVudFR5cGU7XG5cdHJlYWRvbmx5IHN0YXR1cyA6IEthbHR1cmFMaXZlQ2hhbm5lbFNlZ21lbnRTdGF0dXM7XG5cdGNoYW5uZWxJZCA6IHN0cmluZztcblx0ZW50cnlJZCA6IHN0cmluZztcblx0dHJpZ2dlclR5cGUgOiBLYWx0dXJhTGl2ZUNoYW5uZWxTZWdtZW50VHJpZ2dlclR5cGU7XG5cdHRyaWdnZXJTZWdtZW50SWQgOiBudW1iZXI7XG5cdHN0YXJ0VGltZSA6IG51bWJlcjtcblx0ZHVyYXRpb24gOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFMaXZlQ2hhbm5lbFNlZ21lbnRBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUxpdmVDaGFubmVsU2VnbWVudCcgfSxcblx0XHRcdFx0aWQgOiB7IHR5cGUgOiAnbicsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRwYXJ0bmVySWQgOiB7IHR5cGUgOiAnbicsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRjcmVhdGVkQXQgOiB7IHR5cGUgOiAnbicsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHR1cGRhdGVkQXQgOiB7IHR5cGUgOiAnbicsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRuYW1lIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGRlc2NyaXB0aW9uIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHRhZ3MgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dHlwZSA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFMaXZlQ2hhbm5lbFNlZ21lbnRUeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFMaXZlQ2hhbm5lbFNlZ21lbnRUeXBlJyB9LFxuXHRcdFx0XHRzdGF0dXMgOiB7IHR5cGUgOiAnZXMnLCByZWFkT25seSA6IHRydWUsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFMaXZlQ2hhbm5lbFNlZ21lbnRTdGF0dXMsIHN1YlR5cGUgOiAnS2FsdHVyYUxpdmVDaGFubmVsU2VnbWVudFN0YXR1cycgfSxcblx0XHRcdFx0Y2hhbm5lbElkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGVudHJ5SWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dHJpZ2dlclR5cGUgOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhTGl2ZUNoYW5uZWxTZWdtZW50VHJpZ2dlclR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYUxpdmVDaGFubmVsU2VnbWVudFRyaWdnZXJUeXBlJyB9LFxuXHRcdFx0XHR0cmlnZ2VyU2VnbWVudElkIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHN0YXJ0VGltZSA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRkdXJhdGlvbiA6IHsgdHlwZSA6ICduJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhTGl2ZUNoYW5uZWxTZWdtZW50J10gPSBLYWx0dXJhTGl2ZUNoYW5uZWxTZWdtZW50OyJdfQ==