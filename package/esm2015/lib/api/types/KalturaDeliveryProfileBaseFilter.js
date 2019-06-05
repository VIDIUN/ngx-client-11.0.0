/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaPlaybackProtocol } from './KalturaPlaybackProtocol';
import { KalturaDeliveryStatus } from './KalturaDeliveryStatus';
import { KalturaFilter } from './KalturaFilter';
/**
 * @record
 */
export function KalturaDeliveryProfileBaseFilterArgs() { }
/** @type {?|undefined} */
KalturaDeliveryProfileBaseFilterArgs.prototype.idEqual;
/** @type {?|undefined} */
KalturaDeliveryProfileBaseFilterArgs.prototype.idIn;
/** @type {?|undefined} */
KalturaDeliveryProfileBaseFilterArgs.prototype.partnerIdEqual;
/** @type {?|undefined} */
KalturaDeliveryProfileBaseFilterArgs.prototype.partnerIdIn;
/** @type {?|undefined} */
KalturaDeliveryProfileBaseFilterArgs.prototype.systemNameEqual;
/** @type {?|undefined} */
KalturaDeliveryProfileBaseFilterArgs.prototype.systemNameIn;
/** @type {?|undefined} */
KalturaDeliveryProfileBaseFilterArgs.prototype.createdAtGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaDeliveryProfileBaseFilterArgs.prototype.createdAtLessThanOrEqual;
/** @type {?|undefined} */
KalturaDeliveryProfileBaseFilterArgs.prototype.updatedAtGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaDeliveryProfileBaseFilterArgs.prototype.updatedAtLessThanOrEqual;
/** @type {?|undefined} */
KalturaDeliveryProfileBaseFilterArgs.prototype.streamerTypeEqual;
/** @type {?|undefined} */
KalturaDeliveryProfileBaseFilterArgs.prototype.statusEqual;
/** @type {?|undefined} */
KalturaDeliveryProfileBaseFilterArgs.prototype.statusIn;
export class KalturaDeliveryProfileBaseFilter extends KalturaFilter {
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
            objectType: { type: 'c', default: 'KalturaDeliveryProfileBaseFilter' },
            idEqual: { type: 'n' },
            idIn: { type: 's' },
            partnerIdEqual: { type: 'n' },
            partnerIdIn: { type: 's' },
            systemNameEqual: { type: 's' },
            systemNameIn: { type: 's' },
            createdAtGreaterThanOrEqual: { type: 'd' },
            createdAtLessThanOrEqual: { type: 'd' },
            updatedAtGreaterThanOrEqual: { type: 'd' },
            updatedAtLessThanOrEqual: { type: 'd' },
            streamerTypeEqual: { type: 'es', subTypeConstructor: KalturaPlaybackProtocol, subType: 'KalturaPlaybackProtocol' },
            statusEqual: { type: 'en', subTypeConstructor: KalturaDeliveryStatus, subType: 'KalturaDeliveryStatus' },
            statusIn: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaDeliveryProfileBaseFilter.prototype.idEqual;
    /** @type {?} */
    KalturaDeliveryProfileBaseFilter.prototype.idIn;
    /** @type {?} */
    KalturaDeliveryProfileBaseFilter.prototype.partnerIdEqual;
    /** @type {?} */
    KalturaDeliveryProfileBaseFilter.prototype.partnerIdIn;
    /** @type {?} */
    KalturaDeliveryProfileBaseFilter.prototype.systemNameEqual;
    /** @type {?} */
    KalturaDeliveryProfileBaseFilter.prototype.systemNameIn;
    /** @type {?} */
    KalturaDeliveryProfileBaseFilter.prototype.createdAtGreaterThanOrEqual;
    /** @type {?} */
    KalturaDeliveryProfileBaseFilter.prototype.createdAtLessThanOrEqual;
    /** @type {?} */
    KalturaDeliveryProfileBaseFilter.prototype.updatedAtGreaterThanOrEqual;
    /** @type {?} */
    KalturaDeliveryProfileBaseFilter.prototype.updatedAtLessThanOrEqual;
    /** @type {?} */
    KalturaDeliveryProfileBaseFilter.prototype.streamerTypeEqual;
    /** @type {?} */
    KalturaDeliveryProfileBaseFilter.prototype.statusEqual;
    /** @type {?} */
    KalturaDeliveryProfileBaseFilter.prototype.statusIn;
}
typesMappingStorage['KalturaDeliveryProfileBaseFilter'] = KalturaDeliveryProfileBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYURlbGl2ZXJ5UHJvZmlsZUJhc2VGaWx0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFEZWxpdmVyeVByb2ZpbGVCYXNlRmlsdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDcEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGFBQWEsRUFBcUIsTUFBTSxpQkFBaUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1CbkUsTUFBTSx1Q0FBd0MsU0FBUSxhQUFhOzs7O0lBZ0IvRCxZQUFZLElBQTRDO1FBRXBELEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxrQ0FBa0MsRUFBRTtZQUNyRixPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hCLElBQUksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDckIsY0FBYyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMvQixXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVCLGVBQWUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDaEMsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM3QiwyQkFBMkIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUMsd0JBQXdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pDLDJCQUEyQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1Qyx3QkFBd0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekMsaUJBQWlCLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHVCQUF1QixFQUFFLE9BQU8sRUFBRyx5QkFBeUIsRUFBRTtZQUN0SCxXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHFCQUFxQixFQUFFLE9BQU8sRUFBRyx1QkFBdUIsRUFBRTtZQUM1RyxRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ2hCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxrQ0FBa0MsQ0FBQyxHQUFHLGdDQUFnQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFQbGF5YmFja1Byb3RvY29sIH0gZnJvbSAnLi9LYWx0dXJhUGxheWJhY2tQcm90b2NvbCc7XG5pbXBvcnQgeyBLYWx0dXJhRGVsaXZlcnlTdGF0dXMgfSBmcm9tICcuL0thbHR1cmFEZWxpdmVyeVN0YXR1cyc7XG5pbXBvcnQgeyBLYWx0dXJhRmlsdGVyLCBLYWx0dXJhRmlsdGVyQXJncyB9IGZyb20gJy4vS2FsdHVyYUZpbHRlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYURlbGl2ZXJ5UHJvZmlsZUJhc2VGaWx0ZXJBcmdzICBleHRlbmRzIEthbHR1cmFGaWx0ZXJBcmdzIHtcbiAgICBpZEVxdWFsPyA6IG51bWJlcjtcblx0aWRJbj8gOiBzdHJpbmc7XG5cdHBhcnRuZXJJZEVxdWFsPyA6IG51bWJlcjtcblx0cGFydG5lcklkSW4/IDogc3RyaW5nO1xuXHRzeXN0ZW1OYW1lRXF1YWw/IDogc3RyaW5nO1xuXHRzeXN0ZW1OYW1lSW4/IDogc3RyaW5nO1xuXHRjcmVhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWw/IDogRGF0ZTtcblx0Y3JlYXRlZEF0TGVzc1RoYW5PckVxdWFsPyA6IERhdGU7XG5cdHVwZGF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbD8gOiBEYXRlO1xuXHR1cGRhdGVkQXRMZXNzVGhhbk9yRXF1YWw/IDogRGF0ZTtcblx0c3RyZWFtZXJUeXBlRXF1YWw/IDogS2FsdHVyYVBsYXliYWNrUHJvdG9jb2w7XG5cdHN0YXR1c0VxdWFsPyA6IEthbHR1cmFEZWxpdmVyeVN0YXR1cztcblx0c3RhdHVzSW4/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhRGVsaXZlcnlQcm9maWxlQmFzZUZpbHRlciBleHRlbmRzIEthbHR1cmFGaWx0ZXIge1xuXG4gICAgaWRFcXVhbCA6IG51bWJlcjtcblx0aWRJbiA6IHN0cmluZztcblx0cGFydG5lcklkRXF1YWwgOiBudW1iZXI7XG5cdHBhcnRuZXJJZEluIDogc3RyaW5nO1xuXHRzeXN0ZW1OYW1lRXF1YWwgOiBzdHJpbmc7XG5cdHN5c3RlbU5hbWVJbiA6IHN0cmluZztcblx0Y3JlYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsIDogRGF0ZTtcblx0Y3JlYXRlZEF0TGVzc1RoYW5PckVxdWFsIDogRGF0ZTtcblx0dXBkYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsIDogRGF0ZTtcblx0dXBkYXRlZEF0TGVzc1RoYW5PckVxdWFsIDogRGF0ZTtcblx0c3RyZWFtZXJUeXBlRXF1YWwgOiBLYWx0dXJhUGxheWJhY2tQcm90b2NvbDtcblx0c3RhdHVzRXF1YWwgOiBLYWx0dXJhRGVsaXZlcnlTdGF0dXM7XG5cdHN0YXR1c0luIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhRGVsaXZlcnlQcm9maWxlQmFzZUZpbHRlckFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhRGVsaXZlcnlQcm9maWxlQmFzZUZpbHRlcicgfSxcblx0XHRcdFx0aWRFcXVhbCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRpZEluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHBhcnRuZXJJZEVxdWFsIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHBhcnRuZXJJZEluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHN5c3RlbU5hbWVFcXVhbCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzeXN0ZW1OYW1lSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Y3JlYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsIDogeyB0eXBlIDogJ2QnIH0sXG5cdFx0XHRcdGNyZWF0ZWRBdExlc3NUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICdkJyB9LFxuXHRcdFx0XHR1cGRhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnZCcgfSxcblx0XHRcdFx0dXBkYXRlZEF0TGVzc1RoYW5PckVxdWFsIDogeyB0eXBlIDogJ2QnIH0sXG5cdFx0XHRcdHN0cmVhbWVyVHlwZUVxdWFsIDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVBsYXliYWNrUHJvdG9jb2wsIHN1YlR5cGUgOiAnS2FsdHVyYVBsYXliYWNrUHJvdG9jb2wnIH0sXG5cdFx0XHRcdHN0YXR1c0VxdWFsIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYURlbGl2ZXJ5U3RhdHVzLCBzdWJUeXBlIDogJ0thbHR1cmFEZWxpdmVyeVN0YXR1cycgfSxcblx0XHRcdFx0c3RhdHVzSW4gOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYURlbGl2ZXJ5UHJvZmlsZUJhc2VGaWx0ZXInXSA9IEthbHR1cmFEZWxpdmVyeVByb2ZpbGVCYXNlRmlsdGVyOyJdfQ==