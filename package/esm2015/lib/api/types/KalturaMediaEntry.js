/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaMediaType } from './KalturaMediaType';
import { KalturaSourceType } from './KalturaSourceType';
import { KalturaSearchProviderType } from './KalturaSearchProviderType';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaStreamContainer } from './KalturaStreamContainer';
import { KalturaPlayableEntry } from './KalturaPlayableEntry';
/**
 * @record
 */
export function KalturaMediaEntryArgs() { }
/** @type {?|undefined} */
KalturaMediaEntryArgs.prototype.mediaType;
/** @type {?|undefined} */
KalturaMediaEntryArgs.prototype.conversionQuality;
/** @type {?|undefined} */
KalturaMediaEntryArgs.prototype.sourceType;
/** @type {?|undefined} */
KalturaMediaEntryArgs.prototype.searchProviderType;
/** @type {?|undefined} */
KalturaMediaEntryArgs.prototype.searchProviderId;
/** @type {?|undefined} */
KalturaMediaEntryArgs.prototype.creditUserName;
/** @type {?|undefined} */
KalturaMediaEntryArgs.prototype.creditUrl;
/** @type {?|undefined} */
KalturaMediaEntryArgs.prototype.streams;
export class KalturaMediaEntry extends KalturaPlayableEntry {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
        if (typeof this.streams === 'undefined')
            this.streams = [];
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaMediaEntry' },
            mediaType: { type: 'en', subTypeConstructor: KalturaMediaType, subType: 'KalturaMediaType' },
            conversionQuality: { type: 's' },
            sourceType: { type: 'es', subTypeConstructor: KalturaSourceType, subType: 'KalturaSourceType' },
            searchProviderType: { type: 'en', subTypeConstructor: KalturaSearchProviderType, subType: 'KalturaSearchProviderType' },
            searchProviderId: { type: 's' },
            creditUserName: { type: 's' },
            creditUrl: { type: 's' },
            mediaDate: { type: 'd', readOnly: true },
            dataUrl: { type: 's', readOnly: true },
            flavorParamsIds: { type: 's', readOnly: true },
            isTrimDisabled: { type: 'en', readOnly: true, subTypeConstructor: KalturaNullableBoolean, subType: 'KalturaNullableBoolean' },
            streams: { type: 'a', subTypeConstructor: KalturaStreamContainer, subType: 'KalturaStreamContainer' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaMediaEntry.prototype.mediaType;
    /** @type {?} */
    KalturaMediaEntry.prototype.conversionQuality;
    /** @type {?} */
    KalturaMediaEntry.prototype.sourceType;
    /** @type {?} */
    KalturaMediaEntry.prototype.searchProviderType;
    /** @type {?} */
    KalturaMediaEntry.prototype.searchProviderId;
    /** @type {?} */
    KalturaMediaEntry.prototype.creditUserName;
    /** @type {?} */
    KalturaMediaEntry.prototype.creditUrl;
    /** @type {?} */
    KalturaMediaEntry.prototype.mediaDate;
    /** @type {?} */
    KalturaMediaEntry.prototype.dataUrl;
    /** @type {?} */
    KalturaMediaEntry.prototype.flavorParamsIds;
    /** @type {?} */
    KalturaMediaEntry.prototype.isTrimDisabled;
    /** @type {?} */
    KalturaMediaEntry.prototype.streams;
}
typesMappingStorage['KalturaMediaEntry'] = KalturaMediaEntry;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYU1lZGlhRW50cnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFNZWRpYUVudHJ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDdEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDeEQsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDeEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDbEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDbEUsT0FBTyxFQUFFLG9CQUFvQixFQUE0QixNQUFNLHdCQUF3QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFjeEYsTUFBTSx3QkFBeUIsU0FBUSxvQkFBb0I7Ozs7SUFldkQsWUFBWSxJQUE2QjtRQUVyQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDWixFQUFFLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxPQUFPLEtBQUssV0FBVyxDQUFDO1lBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7S0FDOUQ7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLG1CQUFtQixFQUFFO1lBQ3RFLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsZ0JBQWdCLEVBQUUsT0FBTyxFQUFHLGtCQUFrQixFQUFFO1lBQ2hHLGlCQUFpQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNsQyxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLGlCQUFpQixFQUFFLE9BQU8sRUFBRyxtQkFBbUIsRUFBRTtZQUNuRyxrQkFBa0IsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcseUJBQXlCLEVBQUUsT0FBTyxFQUFHLDJCQUEyQixFQUFFO1lBQzNILGdCQUFnQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNqQyxjQUFjLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQy9CLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUIsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQzNDLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUN6QyxlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDakQsY0FBYyxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHNCQUFzQixFQUFFLE9BQU8sRUFBRyx3QkFBd0IsRUFBRTtZQUNsSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLHNCQUFzQixFQUFFLE9BQU8sRUFBRyx3QkFBd0IsRUFBRTtTQUNoRyxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLG1CQUFtQixDQUFDLEdBQUcsaUJBQWlCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYU1lZGlhVHlwZSB9IGZyb20gJy4vS2FsdHVyYU1lZGlhVHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhU291cmNlVHlwZSB9IGZyb20gJy4vS2FsdHVyYVNvdXJjZVR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYVNlYXJjaFByb3ZpZGVyVHlwZSB9IGZyb20gJy4vS2FsdHVyYVNlYXJjaFByb3ZpZGVyVHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhTnVsbGFibGVCb29sZWFuIH0gZnJvbSAnLi9LYWx0dXJhTnVsbGFibGVCb29sZWFuJztcbmltcG9ydCB7IEthbHR1cmFTdHJlYW1Db250YWluZXIgfSBmcm9tICcuL0thbHR1cmFTdHJlYW1Db250YWluZXInO1xuaW1wb3J0IHsgS2FsdHVyYVBsYXlhYmxlRW50cnksIEthbHR1cmFQbGF5YWJsZUVudHJ5QXJncyB9IGZyb20gJy4vS2FsdHVyYVBsYXlhYmxlRW50cnknO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFNZWRpYUVudHJ5QXJncyAgZXh0ZW5kcyBLYWx0dXJhUGxheWFibGVFbnRyeUFyZ3Mge1xuICAgIG1lZGlhVHlwZT8gOiBLYWx0dXJhTWVkaWFUeXBlO1xuXHRjb252ZXJzaW9uUXVhbGl0eT8gOiBzdHJpbmc7XG5cdHNvdXJjZVR5cGU/IDogS2FsdHVyYVNvdXJjZVR5cGU7XG5cdHNlYXJjaFByb3ZpZGVyVHlwZT8gOiBLYWx0dXJhU2VhcmNoUHJvdmlkZXJUeXBlO1xuXHRzZWFyY2hQcm92aWRlcklkPyA6IHN0cmluZztcblx0Y3JlZGl0VXNlck5hbWU/IDogc3RyaW5nO1xuXHRjcmVkaXRVcmw/IDogc3RyaW5nO1xuXHRzdHJlYW1zPyA6IEthbHR1cmFTdHJlYW1Db250YWluZXJbXTtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYU1lZGlhRW50cnkgZXh0ZW5kcyBLYWx0dXJhUGxheWFibGVFbnRyeSB7XG5cbiAgICBtZWRpYVR5cGUgOiBLYWx0dXJhTWVkaWFUeXBlO1xuXHRjb252ZXJzaW9uUXVhbGl0eSA6IHN0cmluZztcblx0c291cmNlVHlwZSA6IEthbHR1cmFTb3VyY2VUeXBlO1xuXHRzZWFyY2hQcm92aWRlclR5cGUgOiBLYWx0dXJhU2VhcmNoUHJvdmlkZXJUeXBlO1xuXHRzZWFyY2hQcm92aWRlcklkIDogc3RyaW5nO1xuXHRjcmVkaXRVc2VyTmFtZSA6IHN0cmluZztcblx0Y3JlZGl0VXJsIDogc3RyaW5nO1xuXHRyZWFkb25seSBtZWRpYURhdGUgOiBEYXRlO1xuXHRyZWFkb25seSBkYXRhVXJsIDogc3RyaW5nO1xuXHRyZWFkb25seSBmbGF2b3JQYXJhbXNJZHMgOiBzdHJpbmc7XG5cdHJlYWRvbmx5IGlzVHJpbURpc2FibGVkIDogS2FsdHVyYU51bGxhYmxlQm9vbGVhbjtcblx0c3RyZWFtcyA6IEthbHR1cmFTdHJlYW1Db250YWluZXJbXTtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYU1lZGlhRW50cnlBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5zdHJlYW1zID09PSAndW5kZWZpbmVkJykgdGhpcy5zdHJlYW1zID0gW107XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYU1lZGlhRW50cnknIH0sXG5cdFx0XHRcdG1lZGlhVHlwZSA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFNZWRpYVR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYU1lZGlhVHlwZScgfSxcblx0XHRcdFx0Y29udmVyc2lvblF1YWxpdHkgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c291cmNlVHlwZSA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFTb3VyY2VUeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFTb3VyY2VUeXBlJyB9LFxuXHRcdFx0XHRzZWFyY2hQcm92aWRlclR5cGUgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhU2VhcmNoUHJvdmlkZXJUeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFTZWFyY2hQcm92aWRlclR5cGUnIH0sXG5cdFx0XHRcdHNlYXJjaFByb3ZpZGVySWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Y3JlZGl0VXNlck5hbWUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Y3JlZGl0VXJsIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdG1lZGlhRGF0ZSA6IHsgdHlwZSA6ICdkJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdGRhdGFVcmwgOiB7IHR5cGUgOiAncycsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRmbGF2b3JQYXJhbXNJZHMgOiB7IHR5cGUgOiAncycsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRpc1RyaW1EaXNhYmxlZCA6IHsgdHlwZSA6ICdlbicsIHJlYWRPbmx5IDogdHJ1ZSwgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYU51bGxhYmxlQm9vbGVhbiwgc3ViVHlwZSA6ICdLYWx0dXJhTnVsbGFibGVCb29sZWFuJyB9LFxuXHRcdFx0XHRzdHJlYW1zIDogeyB0eXBlIDogJ2EnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhU3RyZWFtQ29udGFpbmVyLCBzdWJUeXBlIDogJ0thbHR1cmFTdHJlYW1Db250YWluZXInIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFNZWRpYUVudHJ5J10gPSBLYWx0dXJhTWVkaWFFbnRyeTsiXX0=