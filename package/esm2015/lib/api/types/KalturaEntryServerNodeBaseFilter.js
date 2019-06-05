/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaEntryServerNodeStatus } from './KalturaEntryServerNodeStatus';
import { KalturaEntryServerNodeType } from './KalturaEntryServerNodeType';
import { KalturaFilter } from './KalturaFilter';
/**
 * @record
 */
export function KalturaEntryServerNodeBaseFilterArgs() { }
/** @type {?|undefined} */
KalturaEntryServerNodeBaseFilterArgs.prototype.entryIdEqual;
/** @type {?|undefined} */
KalturaEntryServerNodeBaseFilterArgs.prototype.entryIdIn;
/** @type {?|undefined} */
KalturaEntryServerNodeBaseFilterArgs.prototype.serverNodeIdEqual;
/** @type {?|undefined} */
KalturaEntryServerNodeBaseFilterArgs.prototype.createdAtLessThanOrEqual;
/** @type {?|undefined} */
KalturaEntryServerNodeBaseFilterArgs.prototype.createdAtGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaEntryServerNodeBaseFilterArgs.prototype.updatedAtGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaEntryServerNodeBaseFilterArgs.prototype.updatedAtLessThanOrEqual;
/** @type {?|undefined} */
KalturaEntryServerNodeBaseFilterArgs.prototype.statusEqual;
/** @type {?|undefined} */
KalturaEntryServerNodeBaseFilterArgs.prototype.statusIn;
/** @type {?|undefined} */
KalturaEntryServerNodeBaseFilterArgs.prototype.serverTypeEqual;
/** @type {?|undefined} */
KalturaEntryServerNodeBaseFilterArgs.prototype.serverTypeIn;
export class KalturaEntryServerNodeBaseFilter extends KalturaFilter {
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
            objectType: { type: 'c', default: 'KalturaEntryServerNodeBaseFilter' },
            entryIdEqual: { type: 's' },
            entryIdIn: { type: 's' },
            serverNodeIdEqual: { type: 'n' },
            createdAtLessThanOrEqual: { type: 'd' },
            createdAtGreaterThanOrEqual: { type: 'd' },
            updatedAtGreaterThanOrEqual: { type: 'd' },
            updatedAtLessThanOrEqual: { type: 'd' },
            statusEqual: { type: 'en', subTypeConstructor: KalturaEntryServerNodeStatus, subType: 'KalturaEntryServerNodeStatus' },
            statusIn: { type: 's' },
            serverTypeEqual: { type: 'es', subTypeConstructor: KalturaEntryServerNodeType, subType: 'KalturaEntryServerNodeType' },
            serverTypeIn: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaEntryServerNodeBaseFilter.prototype.entryIdEqual;
    /** @type {?} */
    KalturaEntryServerNodeBaseFilter.prototype.entryIdIn;
    /** @type {?} */
    KalturaEntryServerNodeBaseFilter.prototype.serverNodeIdEqual;
    /** @type {?} */
    KalturaEntryServerNodeBaseFilter.prototype.createdAtLessThanOrEqual;
    /** @type {?} */
    KalturaEntryServerNodeBaseFilter.prototype.createdAtGreaterThanOrEqual;
    /** @type {?} */
    KalturaEntryServerNodeBaseFilter.prototype.updatedAtGreaterThanOrEqual;
    /** @type {?} */
    KalturaEntryServerNodeBaseFilter.prototype.updatedAtLessThanOrEqual;
    /** @type {?} */
    KalturaEntryServerNodeBaseFilter.prototype.statusEqual;
    /** @type {?} */
    KalturaEntryServerNodeBaseFilter.prototype.statusIn;
    /** @type {?} */
    KalturaEntryServerNodeBaseFilter.prototype.serverTypeEqual;
    /** @type {?} */
    KalturaEntryServerNodeBaseFilter.prototype.serverTypeIn;
}
typesMappingStorage['KalturaEntryServerNodeBaseFilter'] = KalturaEntryServerNodeBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUVudHJ5U2VydmVyTm9kZUJhc2VGaWx0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFFbnRyeVNlcnZlck5vZGVCYXNlRmlsdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDOUUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDMUUsT0FBTyxFQUFFLGFBQWEsRUFBcUIsTUFBTSxpQkFBaUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJuRSxNQUFNLHVDQUF3QyxTQUFRLGFBQWE7Ozs7SUFjL0QsWUFBWSxJQUE0QztRQUVwRCxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsa0NBQWtDLEVBQUU7WUFDckYsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM3QixTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzFCLGlCQUFpQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNsQyx3QkFBd0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekMsMkJBQTJCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVDLDJCQUEyQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1Qyx3QkFBd0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekMsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyw0QkFBNEIsRUFBRSxPQUFPLEVBQUcsOEJBQThCLEVBQUU7WUFDMUgsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLDBCQUEwQixFQUFFLE9BQU8sRUFBRyw0QkFBNEIsRUFBRTtZQUMxSCxZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ3BCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLGtDQUFrQyxDQUFDLEdBQUcsZ0NBQWdDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUVudHJ5U2VydmVyTm9kZVN0YXR1cyB9IGZyb20gJy4vS2FsdHVyYUVudHJ5U2VydmVyTm9kZVN0YXR1cyc7XG5pbXBvcnQgeyBLYWx0dXJhRW50cnlTZXJ2ZXJOb2RlVHlwZSB9IGZyb20gJy4vS2FsdHVyYUVudHJ5U2VydmVyTm9kZVR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYUZpbHRlciwgS2FsdHVyYUZpbHRlckFyZ3MgfSBmcm9tICcuL0thbHR1cmFGaWx0ZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFFbnRyeVNlcnZlck5vZGVCYXNlRmlsdGVyQXJncyAgZXh0ZW5kcyBLYWx0dXJhRmlsdGVyQXJncyB7XG4gICAgZW50cnlJZEVxdWFsPyA6IHN0cmluZztcblx0ZW50cnlJZEluPyA6IHN0cmluZztcblx0c2VydmVyTm9kZUlkRXF1YWw/IDogbnVtYmVyO1xuXHRjcmVhdGVkQXRMZXNzVGhhbk9yRXF1YWw/IDogRGF0ZTtcblx0Y3JlYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsPyA6IERhdGU7XG5cdHVwZGF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbD8gOiBEYXRlO1xuXHR1cGRhdGVkQXRMZXNzVGhhbk9yRXF1YWw/IDogRGF0ZTtcblx0c3RhdHVzRXF1YWw/IDogS2FsdHVyYUVudHJ5U2VydmVyTm9kZVN0YXR1cztcblx0c3RhdHVzSW4/IDogc3RyaW5nO1xuXHRzZXJ2ZXJUeXBlRXF1YWw/IDogS2FsdHVyYUVudHJ5U2VydmVyTm9kZVR5cGU7XG5cdHNlcnZlclR5cGVJbj8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFFbnRyeVNlcnZlck5vZGVCYXNlRmlsdGVyIGV4dGVuZHMgS2FsdHVyYUZpbHRlciB7XG5cbiAgICBlbnRyeUlkRXF1YWwgOiBzdHJpbmc7XG5cdGVudHJ5SWRJbiA6IHN0cmluZztcblx0c2VydmVyTm9kZUlkRXF1YWwgOiBudW1iZXI7XG5cdGNyZWF0ZWRBdExlc3NUaGFuT3JFcXVhbCA6IERhdGU7XG5cdGNyZWF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbCA6IERhdGU7XG5cdHVwZGF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbCA6IERhdGU7XG5cdHVwZGF0ZWRBdExlc3NUaGFuT3JFcXVhbCA6IERhdGU7XG5cdHN0YXR1c0VxdWFsIDogS2FsdHVyYUVudHJ5U2VydmVyTm9kZVN0YXR1cztcblx0c3RhdHVzSW4gOiBzdHJpbmc7XG5cdHNlcnZlclR5cGVFcXVhbCA6IEthbHR1cmFFbnRyeVNlcnZlck5vZGVUeXBlO1xuXHRzZXJ2ZXJUeXBlSW4gOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFFbnRyeVNlcnZlck5vZGVCYXNlRmlsdGVyQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFFbnRyeVNlcnZlck5vZGVCYXNlRmlsdGVyJyB9LFxuXHRcdFx0XHRlbnRyeUlkRXF1YWwgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZW50cnlJZEluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHNlcnZlck5vZGVJZEVxdWFsIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGNyZWF0ZWRBdExlc3NUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICdkJyB9LFxuXHRcdFx0XHRjcmVhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnZCcgfSxcblx0XHRcdFx0dXBkYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsIDogeyB0eXBlIDogJ2QnIH0sXG5cdFx0XHRcdHVwZGF0ZWRBdExlc3NUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICdkJyB9LFxuXHRcdFx0XHRzdGF0dXNFcXVhbCA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFFbnRyeVNlcnZlck5vZGVTdGF0dXMsIHN1YlR5cGUgOiAnS2FsdHVyYUVudHJ5U2VydmVyTm9kZVN0YXR1cycgfSxcblx0XHRcdFx0c3RhdHVzSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c2VydmVyVHlwZUVxdWFsIDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUVudHJ5U2VydmVyTm9kZVR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYUVudHJ5U2VydmVyTm9kZVR5cGUnIH0sXG5cdFx0XHRcdHNlcnZlclR5cGVJbiA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhRW50cnlTZXJ2ZXJOb2RlQmFzZUZpbHRlciddID0gS2FsdHVyYUVudHJ5U2VydmVyTm9kZUJhc2VGaWx0ZXI7Il19