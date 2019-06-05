/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaStorageProfileStatus } from './KalturaStorageProfileStatus';
import { KalturaStorageProfileProtocol } from './KalturaStorageProfileProtocol';
import { KalturaFilter } from './KalturaFilter';
/**
 * @record
 */
export function KalturaStorageProfileBaseFilterArgs() { }
/** @type {?|undefined} */
KalturaStorageProfileBaseFilterArgs.prototype.idEqual;
/** @type {?|undefined} */
KalturaStorageProfileBaseFilterArgs.prototype.idIn;
/** @type {?|undefined} */
KalturaStorageProfileBaseFilterArgs.prototype.createdAtGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaStorageProfileBaseFilterArgs.prototype.createdAtLessThanOrEqual;
/** @type {?|undefined} */
KalturaStorageProfileBaseFilterArgs.prototype.updatedAtGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaStorageProfileBaseFilterArgs.prototype.updatedAtLessThanOrEqual;
/** @type {?|undefined} */
KalturaStorageProfileBaseFilterArgs.prototype.partnerIdEqual;
/** @type {?|undefined} */
KalturaStorageProfileBaseFilterArgs.prototype.partnerIdIn;
/** @type {?|undefined} */
KalturaStorageProfileBaseFilterArgs.prototype.systemNameEqual;
/** @type {?|undefined} */
KalturaStorageProfileBaseFilterArgs.prototype.systemNameIn;
/** @type {?|undefined} */
KalturaStorageProfileBaseFilterArgs.prototype.statusEqual;
/** @type {?|undefined} */
KalturaStorageProfileBaseFilterArgs.prototype.statusIn;
/** @type {?|undefined} */
KalturaStorageProfileBaseFilterArgs.prototype.protocolEqual;
/** @type {?|undefined} */
KalturaStorageProfileBaseFilterArgs.prototype.protocolIn;
export class KalturaStorageProfileBaseFilter extends KalturaFilter {
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
            objectType: { type: 'c', default: 'KalturaStorageProfileBaseFilter' },
            idEqual: { type: 'n' },
            idIn: { type: 's' },
            createdAtGreaterThanOrEqual: { type: 'd' },
            createdAtLessThanOrEqual: { type: 'd' },
            updatedAtGreaterThanOrEqual: { type: 'd' },
            updatedAtLessThanOrEqual: { type: 'd' },
            partnerIdEqual: { type: 'n' },
            partnerIdIn: { type: 's' },
            systemNameEqual: { type: 's' },
            systemNameIn: { type: 's' },
            statusEqual: { type: 'en', subTypeConstructor: KalturaStorageProfileStatus, subType: 'KalturaStorageProfileStatus' },
            statusIn: { type: 's' },
            protocolEqual: { type: 'es', subTypeConstructor: KalturaStorageProfileProtocol, subType: 'KalturaStorageProfileProtocol' },
            protocolIn: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaStorageProfileBaseFilter.prototype.idEqual;
    /** @type {?} */
    KalturaStorageProfileBaseFilter.prototype.idIn;
    /** @type {?} */
    KalturaStorageProfileBaseFilter.prototype.createdAtGreaterThanOrEqual;
    /** @type {?} */
    KalturaStorageProfileBaseFilter.prototype.createdAtLessThanOrEqual;
    /** @type {?} */
    KalturaStorageProfileBaseFilter.prototype.updatedAtGreaterThanOrEqual;
    /** @type {?} */
    KalturaStorageProfileBaseFilter.prototype.updatedAtLessThanOrEqual;
    /** @type {?} */
    KalturaStorageProfileBaseFilter.prototype.partnerIdEqual;
    /** @type {?} */
    KalturaStorageProfileBaseFilter.prototype.partnerIdIn;
    /** @type {?} */
    KalturaStorageProfileBaseFilter.prototype.systemNameEqual;
    /** @type {?} */
    KalturaStorageProfileBaseFilter.prototype.systemNameIn;
    /** @type {?} */
    KalturaStorageProfileBaseFilter.prototype.statusEqual;
    /** @type {?} */
    KalturaStorageProfileBaseFilter.prototype.statusIn;
    /** @type {?} */
    KalturaStorageProfileBaseFilter.prototype.protocolEqual;
    /** @type {?} */
    KalturaStorageProfileBaseFilter.prototype.protocolIn;
}
typesMappingStorage['KalturaStorageProfileBaseFilter'] = KalturaStorageProfileBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVN0b3JhZ2VQcm9maWxlQmFzZUZpbHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYVN0b3JhZ2VQcm9maWxlQmFzZUZpbHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzVFLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxhQUFhLEVBQXFCLE1BQU0saUJBQWlCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CbkUsTUFBTSxzQ0FBdUMsU0FBUSxhQUFhOzs7O0lBaUI5RCxZQUFZLElBQTJDO1FBRW5ELEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxpQ0FBaUMsRUFBRTtZQUNwRixPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hCLElBQUksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDckIsMkJBQTJCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVDLHdCQUF3QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QywyQkFBMkIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUMsd0JBQXdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pDLGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDL0IsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1QixlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2hDLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDN0IsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRywyQkFBMkIsRUFBRSxPQUFPLEVBQUcsNkJBQTZCLEVBQUU7WUFDeEgsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLDZCQUE2QixFQUFFLE9BQU8sRUFBRywrQkFBK0IsRUFBRTtZQUM5SCxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ2xCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLGlDQUFpQyxDQUFDLEdBQUcsK0JBQStCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVN0b3JhZ2VQcm9maWxlU3RhdHVzIH0gZnJvbSAnLi9LYWx0dXJhU3RvcmFnZVByb2ZpbGVTdGF0dXMnO1xuaW1wb3J0IHsgS2FsdHVyYVN0b3JhZ2VQcm9maWxlUHJvdG9jb2wgfSBmcm9tICcuL0thbHR1cmFTdG9yYWdlUHJvZmlsZVByb3RvY29sJztcbmltcG9ydCB7IEthbHR1cmFGaWx0ZXIsIEthbHR1cmFGaWx0ZXJBcmdzIH0gZnJvbSAnLi9LYWx0dXJhRmlsdGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhU3RvcmFnZVByb2ZpbGVCYXNlRmlsdGVyQXJncyAgZXh0ZW5kcyBLYWx0dXJhRmlsdGVyQXJncyB7XG4gICAgaWRFcXVhbD8gOiBudW1iZXI7XG5cdGlkSW4/IDogc3RyaW5nO1xuXHRjcmVhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWw/IDogRGF0ZTtcblx0Y3JlYXRlZEF0TGVzc1RoYW5PckVxdWFsPyA6IERhdGU7XG5cdHVwZGF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbD8gOiBEYXRlO1xuXHR1cGRhdGVkQXRMZXNzVGhhbk9yRXF1YWw/IDogRGF0ZTtcblx0cGFydG5lcklkRXF1YWw/IDogbnVtYmVyO1xuXHRwYXJ0bmVySWRJbj8gOiBzdHJpbmc7XG5cdHN5c3RlbU5hbWVFcXVhbD8gOiBzdHJpbmc7XG5cdHN5c3RlbU5hbWVJbj8gOiBzdHJpbmc7XG5cdHN0YXR1c0VxdWFsPyA6IEthbHR1cmFTdG9yYWdlUHJvZmlsZVN0YXR1cztcblx0c3RhdHVzSW4/IDogc3RyaW5nO1xuXHRwcm90b2NvbEVxdWFsPyA6IEthbHR1cmFTdG9yYWdlUHJvZmlsZVByb3RvY29sO1xuXHRwcm90b2NvbEluPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYVN0b3JhZ2VQcm9maWxlQmFzZUZpbHRlciBleHRlbmRzIEthbHR1cmFGaWx0ZXIge1xuXG4gICAgaWRFcXVhbCA6IG51bWJlcjtcblx0aWRJbiA6IHN0cmluZztcblx0Y3JlYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsIDogRGF0ZTtcblx0Y3JlYXRlZEF0TGVzc1RoYW5PckVxdWFsIDogRGF0ZTtcblx0dXBkYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsIDogRGF0ZTtcblx0dXBkYXRlZEF0TGVzc1RoYW5PckVxdWFsIDogRGF0ZTtcblx0cGFydG5lcklkRXF1YWwgOiBudW1iZXI7XG5cdHBhcnRuZXJJZEluIDogc3RyaW5nO1xuXHRzeXN0ZW1OYW1lRXF1YWwgOiBzdHJpbmc7XG5cdHN5c3RlbU5hbWVJbiA6IHN0cmluZztcblx0c3RhdHVzRXF1YWwgOiBLYWx0dXJhU3RvcmFnZVByb2ZpbGVTdGF0dXM7XG5cdHN0YXR1c0luIDogc3RyaW5nO1xuXHRwcm90b2NvbEVxdWFsIDogS2FsdHVyYVN0b3JhZ2VQcm9maWxlUHJvdG9jb2w7XG5cdHByb3RvY29sSW4gOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFTdG9yYWdlUHJvZmlsZUJhc2VGaWx0ZXJBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYVN0b3JhZ2VQcm9maWxlQmFzZUZpbHRlcicgfSxcblx0XHRcdFx0aWRFcXVhbCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRpZEluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGNyZWF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICdkJyB9LFxuXHRcdFx0XHRjcmVhdGVkQXRMZXNzVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnZCcgfSxcblx0XHRcdFx0dXBkYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsIDogeyB0eXBlIDogJ2QnIH0sXG5cdFx0XHRcdHVwZGF0ZWRBdExlc3NUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICdkJyB9LFxuXHRcdFx0XHRwYXJ0bmVySWRFcXVhbCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRwYXJ0bmVySWRJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzeXN0ZW1OYW1lRXF1YWwgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c3lzdGVtTmFtZUluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHN0YXR1c0VxdWFsIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVN0b3JhZ2VQcm9maWxlU3RhdHVzLCBzdWJUeXBlIDogJ0thbHR1cmFTdG9yYWdlUHJvZmlsZVN0YXR1cycgfSxcblx0XHRcdFx0c3RhdHVzSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cHJvdG9jb2xFcXVhbCA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFTdG9yYWdlUHJvZmlsZVByb3RvY29sLCBzdWJUeXBlIDogJ0thbHR1cmFTdG9yYWdlUHJvZmlsZVByb3RvY29sJyB9LFxuXHRcdFx0XHRwcm90b2NvbEluIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFTdG9yYWdlUHJvZmlsZUJhc2VGaWx0ZXInXSA9IEthbHR1cmFTdG9yYWdlUHJvZmlsZUJhc2VGaWx0ZXI7Il19