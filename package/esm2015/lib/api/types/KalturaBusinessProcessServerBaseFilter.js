/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaBusinessProcessServerStatus } from './KalturaBusinessProcessServerStatus';
import { KalturaBusinessProcessProvider } from './KalturaBusinessProcessProvider';
import { KalturaFilter } from './KalturaFilter';
/**
 * @record
 */
export function KalturaBusinessProcessServerBaseFilterArgs() { }
/** @type {?|undefined} */
KalturaBusinessProcessServerBaseFilterArgs.prototype.idEqual;
/** @type {?|undefined} */
KalturaBusinessProcessServerBaseFilterArgs.prototype.idIn;
/** @type {?|undefined} */
KalturaBusinessProcessServerBaseFilterArgs.prototype.idNotIn;
/** @type {?|undefined} */
KalturaBusinessProcessServerBaseFilterArgs.prototype.createdAtGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaBusinessProcessServerBaseFilterArgs.prototype.createdAtLessThanOrEqual;
/** @type {?|undefined} */
KalturaBusinessProcessServerBaseFilterArgs.prototype.updatedAtGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaBusinessProcessServerBaseFilterArgs.prototype.updatedAtLessThanOrEqual;
/** @type {?|undefined} */
KalturaBusinessProcessServerBaseFilterArgs.prototype.partnerIdEqual;
/** @type {?|undefined} */
KalturaBusinessProcessServerBaseFilterArgs.prototype.partnerIdIn;
/** @type {?|undefined} */
KalturaBusinessProcessServerBaseFilterArgs.prototype.statusEqual;
/** @type {?|undefined} */
KalturaBusinessProcessServerBaseFilterArgs.prototype.statusNotEqual;
/** @type {?|undefined} */
KalturaBusinessProcessServerBaseFilterArgs.prototype.statusIn;
/** @type {?|undefined} */
KalturaBusinessProcessServerBaseFilterArgs.prototype.statusNotIn;
/** @type {?|undefined} */
KalturaBusinessProcessServerBaseFilterArgs.prototype.typeEqual;
/** @type {?|undefined} */
KalturaBusinessProcessServerBaseFilterArgs.prototype.typeIn;
/** @type {?|undefined} */
KalturaBusinessProcessServerBaseFilterArgs.prototype.dcEqual;
/** @type {?|undefined} */
KalturaBusinessProcessServerBaseFilterArgs.prototype.dcEqOrNull;
export class KalturaBusinessProcessServerBaseFilter extends KalturaFilter {
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
            objectType: { type: 'c', default: 'KalturaBusinessProcessServerBaseFilter' },
            idEqual: { type: 'n' },
            idIn: { type: 's' },
            idNotIn: { type: 's' },
            createdAtGreaterThanOrEqual: { type: 'd' },
            createdAtLessThanOrEqual: { type: 'd' },
            updatedAtGreaterThanOrEqual: { type: 'd' },
            updatedAtLessThanOrEqual: { type: 'd' },
            partnerIdEqual: { type: 'n' },
            partnerIdIn: { type: 's' },
            statusEqual: { type: 'es', subTypeConstructor: KalturaBusinessProcessServerStatus, subType: 'KalturaBusinessProcessServerStatus' },
            statusNotEqual: { type: 'es', subTypeConstructor: KalturaBusinessProcessServerStatus, subType: 'KalturaBusinessProcessServerStatus' },
            statusIn: { type: 's' },
            statusNotIn: { type: 's' },
            typeEqual: { type: 'es', subTypeConstructor: KalturaBusinessProcessProvider, subType: 'KalturaBusinessProcessProvider' },
            typeIn: { type: 's' },
            dcEqual: { type: 'n' },
            dcEqOrNull: { type: 'n' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaBusinessProcessServerBaseFilter.prototype.idEqual;
    /** @type {?} */
    KalturaBusinessProcessServerBaseFilter.prototype.idIn;
    /** @type {?} */
    KalturaBusinessProcessServerBaseFilter.prototype.idNotIn;
    /** @type {?} */
    KalturaBusinessProcessServerBaseFilter.prototype.createdAtGreaterThanOrEqual;
    /** @type {?} */
    KalturaBusinessProcessServerBaseFilter.prototype.createdAtLessThanOrEqual;
    /** @type {?} */
    KalturaBusinessProcessServerBaseFilter.prototype.updatedAtGreaterThanOrEqual;
    /** @type {?} */
    KalturaBusinessProcessServerBaseFilter.prototype.updatedAtLessThanOrEqual;
    /** @type {?} */
    KalturaBusinessProcessServerBaseFilter.prototype.partnerIdEqual;
    /** @type {?} */
    KalturaBusinessProcessServerBaseFilter.prototype.partnerIdIn;
    /** @type {?} */
    KalturaBusinessProcessServerBaseFilter.prototype.statusEqual;
    /** @type {?} */
    KalturaBusinessProcessServerBaseFilter.prototype.statusNotEqual;
    /** @type {?} */
    KalturaBusinessProcessServerBaseFilter.prototype.statusIn;
    /** @type {?} */
    KalturaBusinessProcessServerBaseFilter.prototype.statusNotIn;
    /** @type {?} */
    KalturaBusinessProcessServerBaseFilter.prototype.typeEqual;
    /** @type {?} */
    KalturaBusinessProcessServerBaseFilter.prototype.typeIn;
    /** @type {?} */
    KalturaBusinessProcessServerBaseFilter.prototype.dcEqual;
    /** @type {?} */
    KalturaBusinessProcessServerBaseFilter.prototype.dcEqOrNull;
}
typesMappingStorage['KalturaBusinessProcessServerBaseFilter'] = KalturaBusinessProcessServerBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUJ1c2luZXNzUHJvY2Vzc1NlcnZlckJhc2VGaWx0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFCdXNpbmVzc1Byb2Nlc3NTZXJ2ZXJCYXNlRmlsdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDMUYsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDbEYsT0FBTyxFQUFFLGFBQWEsRUFBcUIsTUFBTSxpQkFBaUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUJuRSxNQUFNLDZDQUE4QyxTQUFRLGFBQWE7Ozs7SUFvQnJFLFlBQVksSUFBa0Q7UUFFMUQsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHdDQUF3QyxFQUFFO1lBQzNGLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNyQixPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hCLDJCQUEyQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1Qyx3QkFBd0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekMsMkJBQTJCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVDLHdCQUF3QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QyxjQUFjLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQy9CLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUIsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxrQ0FBa0MsRUFBRSxPQUFPLEVBQUcsb0NBQW9DLEVBQUU7WUFDdEksY0FBYyxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxrQ0FBa0MsRUFBRSxPQUFPLEVBQUcsb0NBQW9DLEVBQUU7WUFDekksUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVCLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsOEJBQThCLEVBQUUsT0FBTyxFQUFHLGdDQUFnQyxFQUFFO1lBQzVILE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdkIsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QixVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ2xCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLHdDQUF3QyxDQUFDLEdBQUcsc0NBQXNDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUJ1c2luZXNzUHJvY2Vzc1NlcnZlclN0YXR1cyB9IGZyb20gJy4vS2FsdHVyYUJ1c2luZXNzUHJvY2Vzc1NlcnZlclN0YXR1cyc7XG5pbXBvcnQgeyBLYWx0dXJhQnVzaW5lc3NQcm9jZXNzUHJvdmlkZXIgfSBmcm9tICcuL0thbHR1cmFCdXNpbmVzc1Byb2Nlc3NQcm92aWRlcic7XG5pbXBvcnQgeyBLYWx0dXJhRmlsdGVyLCBLYWx0dXJhRmlsdGVyQXJncyB9IGZyb20gJy4vS2FsdHVyYUZpbHRlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUJ1c2luZXNzUHJvY2Vzc1NlcnZlckJhc2VGaWx0ZXJBcmdzICBleHRlbmRzIEthbHR1cmFGaWx0ZXJBcmdzIHtcbiAgICBpZEVxdWFsPyA6IG51bWJlcjtcblx0aWRJbj8gOiBzdHJpbmc7XG5cdGlkTm90SW4/IDogc3RyaW5nO1xuXHRjcmVhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWw/IDogRGF0ZTtcblx0Y3JlYXRlZEF0TGVzc1RoYW5PckVxdWFsPyA6IERhdGU7XG5cdHVwZGF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbD8gOiBEYXRlO1xuXHR1cGRhdGVkQXRMZXNzVGhhbk9yRXF1YWw/IDogRGF0ZTtcblx0cGFydG5lcklkRXF1YWw/IDogbnVtYmVyO1xuXHRwYXJ0bmVySWRJbj8gOiBzdHJpbmc7XG5cdHN0YXR1c0VxdWFsPyA6IEthbHR1cmFCdXNpbmVzc1Byb2Nlc3NTZXJ2ZXJTdGF0dXM7XG5cdHN0YXR1c05vdEVxdWFsPyA6IEthbHR1cmFCdXNpbmVzc1Byb2Nlc3NTZXJ2ZXJTdGF0dXM7XG5cdHN0YXR1c0luPyA6IHN0cmluZztcblx0c3RhdHVzTm90SW4/IDogc3RyaW5nO1xuXHR0eXBlRXF1YWw/IDogS2FsdHVyYUJ1c2luZXNzUHJvY2Vzc1Byb3ZpZGVyO1xuXHR0eXBlSW4/IDogc3RyaW5nO1xuXHRkY0VxdWFsPyA6IG51bWJlcjtcblx0ZGNFcU9yTnVsbD8gOiBudW1iZXI7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFCdXNpbmVzc1Byb2Nlc3NTZXJ2ZXJCYXNlRmlsdGVyIGV4dGVuZHMgS2FsdHVyYUZpbHRlciB7XG5cbiAgICBpZEVxdWFsIDogbnVtYmVyO1xuXHRpZEluIDogc3RyaW5nO1xuXHRpZE5vdEluIDogc3RyaW5nO1xuXHRjcmVhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWwgOiBEYXRlO1xuXHRjcmVhdGVkQXRMZXNzVGhhbk9yRXF1YWwgOiBEYXRlO1xuXHR1cGRhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWwgOiBEYXRlO1xuXHR1cGRhdGVkQXRMZXNzVGhhbk9yRXF1YWwgOiBEYXRlO1xuXHRwYXJ0bmVySWRFcXVhbCA6IG51bWJlcjtcblx0cGFydG5lcklkSW4gOiBzdHJpbmc7XG5cdHN0YXR1c0VxdWFsIDogS2FsdHVyYUJ1c2luZXNzUHJvY2Vzc1NlcnZlclN0YXR1cztcblx0c3RhdHVzTm90RXF1YWwgOiBLYWx0dXJhQnVzaW5lc3NQcm9jZXNzU2VydmVyU3RhdHVzO1xuXHRzdGF0dXNJbiA6IHN0cmluZztcblx0c3RhdHVzTm90SW4gOiBzdHJpbmc7XG5cdHR5cGVFcXVhbCA6IEthbHR1cmFCdXNpbmVzc1Byb2Nlc3NQcm92aWRlcjtcblx0dHlwZUluIDogc3RyaW5nO1xuXHRkY0VxdWFsIDogbnVtYmVyO1xuXHRkY0VxT3JOdWxsIDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhQnVzaW5lc3NQcm9jZXNzU2VydmVyQmFzZUZpbHRlckFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhQnVzaW5lc3NQcm9jZXNzU2VydmVyQmFzZUZpbHRlcicgfSxcblx0XHRcdFx0aWRFcXVhbCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRpZEluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGlkTm90SW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Y3JlYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsIDogeyB0eXBlIDogJ2QnIH0sXG5cdFx0XHRcdGNyZWF0ZWRBdExlc3NUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICdkJyB9LFxuXHRcdFx0XHR1cGRhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnZCcgfSxcblx0XHRcdFx0dXBkYXRlZEF0TGVzc1RoYW5PckVxdWFsIDogeyB0eXBlIDogJ2QnIH0sXG5cdFx0XHRcdHBhcnRuZXJJZEVxdWFsIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHBhcnRuZXJJZEluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHN0YXR1c0VxdWFsIDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUJ1c2luZXNzUHJvY2Vzc1NlcnZlclN0YXR1cywgc3ViVHlwZSA6ICdLYWx0dXJhQnVzaW5lc3NQcm9jZXNzU2VydmVyU3RhdHVzJyB9LFxuXHRcdFx0XHRzdGF0dXNOb3RFcXVhbCA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFCdXNpbmVzc1Byb2Nlc3NTZXJ2ZXJTdGF0dXMsIHN1YlR5cGUgOiAnS2FsdHVyYUJ1c2luZXNzUHJvY2Vzc1NlcnZlclN0YXR1cycgfSxcblx0XHRcdFx0c3RhdHVzSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c3RhdHVzTm90SW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dHlwZUVxdWFsIDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUJ1c2luZXNzUHJvY2Vzc1Byb3ZpZGVyLCBzdWJUeXBlIDogJ0thbHR1cmFCdXNpbmVzc1Byb2Nlc3NQcm92aWRlcicgfSxcblx0XHRcdFx0dHlwZUluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGRjRXF1YWwgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0ZGNFcU9yTnVsbCA6IHsgdHlwZSA6ICduJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhQnVzaW5lc3NQcm9jZXNzU2VydmVyQmFzZUZpbHRlciddID0gS2FsdHVyYUJ1c2luZXNzUHJvY2Vzc1NlcnZlckJhc2VGaWx0ZXI7Il19