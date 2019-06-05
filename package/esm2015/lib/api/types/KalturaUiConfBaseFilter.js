/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaUiConfObjType } from './KalturaUiConfObjType';
import { KalturaUiConfCreationMode } from './KalturaUiConfCreationMode';
import { KalturaFilter } from './KalturaFilter';
/**
 * @record
 */
export function KalturaUiConfBaseFilterArgs() { }
/** @type {?|undefined} */
KalturaUiConfBaseFilterArgs.prototype.idEqual;
/** @type {?|undefined} */
KalturaUiConfBaseFilterArgs.prototype.idIn;
/** @type {?|undefined} */
KalturaUiConfBaseFilterArgs.prototype.nameLike;
/** @type {?|undefined} */
KalturaUiConfBaseFilterArgs.prototype.partnerIdEqual;
/** @type {?|undefined} */
KalturaUiConfBaseFilterArgs.prototype.partnerIdIn;
/** @type {?|undefined} */
KalturaUiConfBaseFilterArgs.prototype.objTypeEqual;
/** @type {?|undefined} */
KalturaUiConfBaseFilterArgs.prototype.objTypeIn;
/** @type {?|undefined} */
KalturaUiConfBaseFilterArgs.prototype.tagsMultiLikeOr;
/** @type {?|undefined} */
KalturaUiConfBaseFilterArgs.prototype.tagsMultiLikeAnd;
/** @type {?|undefined} */
KalturaUiConfBaseFilterArgs.prototype.createdAtGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaUiConfBaseFilterArgs.prototype.createdAtLessThanOrEqual;
/** @type {?|undefined} */
KalturaUiConfBaseFilterArgs.prototype.updatedAtGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaUiConfBaseFilterArgs.prototype.updatedAtLessThanOrEqual;
/** @type {?|undefined} */
KalturaUiConfBaseFilterArgs.prototype.creationModeEqual;
/** @type {?|undefined} */
KalturaUiConfBaseFilterArgs.prototype.creationModeIn;
/** @type {?|undefined} */
KalturaUiConfBaseFilterArgs.prototype.versionEqual;
/** @type {?|undefined} */
KalturaUiConfBaseFilterArgs.prototype.versionMultiLikeOr;
/** @type {?|undefined} */
KalturaUiConfBaseFilterArgs.prototype.versionMultiLikeAnd;
/** @type {?|undefined} */
KalturaUiConfBaseFilterArgs.prototype.partnerTagsMultiLikeOr;
/** @type {?|undefined} */
KalturaUiConfBaseFilterArgs.prototype.partnerTagsMultiLikeAnd;
export class KalturaUiConfBaseFilter extends KalturaFilter {
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
            objectType: { type: 'c', default: 'KalturaUiConfBaseFilter' },
            idEqual: { type: 'n' },
            idIn: { type: 's' },
            nameLike: { type: 's' },
            partnerIdEqual: { type: 'n' },
            partnerIdIn: { type: 's' },
            objTypeEqual: { type: 'en', subTypeConstructor: KalturaUiConfObjType, subType: 'KalturaUiConfObjType' },
            objTypeIn: { type: 's' },
            tagsMultiLikeOr: { type: 's' },
            tagsMultiLikeAnd: { type: 's' },
            createdAtGreaterThanOrEqual: { type: 'd' },
            createdAtLessThanOrEqual: { type: 'd' },
            updatedAtGreaterThanOrEqual: { type: 'd' },
            updatedAtLessThanOrEqual: { type: 'd' },
            creationModeEqual: { type: 'en', subTypeConstructor: KalturaUiConfCreationMode, subType: 'KalturaUiConfCreationMode' },
            creationModeIn: { type: 's' },
            versionEqual: { type: 's' },
            versionMultiLikeOr: { type: 's' },
            versionMultiLikeAnd: { type: 's' },
            partnerTagsMultiLikeOr: { type: 's' },
            partnerTagsMultiLikeAnd: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaUiConfBaseFilter.prototype.idEqual;
    /** @type {?} */
    KalturaUiConfBaseFilter.prototype.idIn;
    /** @type {?} */
    KalturaUiConfBaseFilter.prototype.nameLike;
    /** @type {?} */
    KalturaUiConfBaseFilter.prototype.partnerIdEqual;
    /** @type {?} */
    KalturaUiConfBaseFilter.prototype.partnerIdIn;
    /** @type {?} */
    KalturaUiConfBaseFilter.prototype.objTypeEqual;
    /** @type {?} */
    KalturaUiConfBaseFilter.prototype.objTypeIn;
    /** @type {?} */
    KalturaUiConfBaseFilter.prototype.tagsMultiLikeOr;
    /** @type {?} */
    KalturaUiConfBaseFilter.prototype.tagsMultiLikeAnd;
    /** @type {?} */
    KalturaUiConfBaseFilter.prototype.createdAtGreaterThanOrEqual;
    /** @type {?} */
    KalturaUiConfBaseFilter.prototype.createdAtLessThanOrEqual;
    /** @type {?} */
    KalturaUiConfBaseFilter.prototype.updatedAtGreaterThanOrEqual;
    /** @type {?} */
    KalturaUiConfBaseFilter.prototype.updatedAtLessThanOrEqual;
    /** @type {?} */
    KalturaUiConfBaseFilter.prototype.creationModeEqual;
    /** @type {?} */
    KalturaUiConfBaseFilter.prototype.creationModeIn;
    /** @type {?} */
    KalturaUiConfBaseFilter.prototype.versionEqual;
    /** @type {?} */
    KalturaUiConfBaseFilter.prototype.versionMultiLikeOr;
    /** @type {?} */
    KalturaUiConfBaseFilter.prototype.versionMultiLikeAnd;
    /** @type {?} */
    KalturaUiConfBaseFilter.prototype.partnerTagsMultiLikeOr;
    /** @type {?} */
    KalturaUiConfBaseFilter.prototype.partnerTagsMultiLikeAnd;
}
typesMappingStorage['KalturaUiConfBaseFilter'] = KalturaUiConfBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVVpQ29uZkJhc2VGaWx0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFVaUNvbmZCYXNlRmlsdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDOUQsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDeEUsT0FBTyxFQUFFLGFBQWEsRUFBcUIsTUFBTSxpQkFBaUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMEJuRSxNQUFNLDhCQUErQixTQUFRLGFBQWE7Ozs7SUF1QnRELFlBQVksSUFBbUM7UUFFM0MsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHlCQUF5QixFQUFFO1lBQzVFLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNyQixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDL0IsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1QixZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLG9CQUFvQixFQUFFLE9BQU8sRUFBRyxzQkFBc0IsRUFBRTtZQUMzRyxTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzFCLGVBQWUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDaEMsZ0JBQWdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2pDLDJCQUEyQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1Qyx3QkFBd0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekMsMkJBQTJCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVDLHdCQUF3QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QyxpQkFBaUIsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcseUJBQXlCLEVBQUUsT0FBTyxFQUFHLDJCQUEyQixFQUFFO1lBQzFILGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDL0IsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM3QixrQkFBa0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDbkMsbUJBQW1CLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3BDLHNCQUFzQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN2Qyx1QkFBdUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDL0IsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMseUJBQXlCLENBQUMsR0FBRyx1QkFBdUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhVWlDb25mT2JqVHlwZSB9IGZyb20gJy4vS2FsdHVyYVVpQ29uZk9ialR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYVVpQ29uZkNyZWF0aW9uTW9kZSB9IGZyb20gJy4vS2FsdHVyYVVpQ29uZkNyZWF0aW9uTW9kZSc7XG5pbXBvcnQgeyBLYWx0dXJhRmlsdGVyLCBLYWx0dXJhRmlsdGVyQXJncyB9IGZyb20gJy4vS2FsdHVyYUZpbHRlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYVVpQ29uZkJhc2VGaWx0ZXJBcmdzICBleHRlbmRzIEthbHR1cmFGaWx0ZXJBcmdzIHtcbiAgICBpZEVxdWFsPyA6IG51bWJlcjtcblx0aWRJbj8gOiBzdHJpbmc7XG5cdG5hbWVMaWtlPyA6IHN0cmluZztcblx0cGFydG5lcklkRXF1YWw/IDogbnVtYmVyO1xuXHRwYXJ0bmVySWRJbj8gOiBzdHJpbmc7XG5cdG9ialR5cGVFcXVhbD8gOiBLYWx0dXJhVWlDb25mT2JqVHlwZTtcblx0b2JqVHlwZUluPyA6IHN0cmluZztcblx0dGFnc011bHRpTGlrZU9yPyA6IHN0cmluZztcblx0dGFnc011bHRpTGlrZUFuZD8gOiBzdHJpbmc7XG5cdGNyZWF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbD8gOiBEYXRlO1xuXHRjcmVhdGVkQXRMZXNzVGhhbk9yRXF1YWw/IDogRGF0ZTtcblx0dXBkYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsPyA6IERhdGU7XG5cdHVwZGF0ZWRBdExlc3NUaGFuT3JFcXVhbD8gOiBEYXRlO1xuXHRjcmVhdGlvbk1vZGVFcXVhbD8gOiBLYWx0dXJhVWlDb25mQ3JlYXRpb25Nb2RlO1xuXHRjcmVhdGlvbk1vZGVJbj8gOiBzdHJpbmc7XG5cdHZlcnNpb25FcXVhbD8gOiBzdHJpbmc7XG5cdHZlcnNpb25NdWx0aUxpa2VPcj8gOiBzdHJpbmc7XG5cdHZlcnNpb25NdWx0aUxpa2VBbmQ/IDogc3RyaW5nO1xuXHRwYXJ0bmVyVGFnc011bHRpTGlrZU9yPyA6IHN0cmluZztcblx0cGFydG5lclRhZ3NNdWx0aUxpa2VBbmQ/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhVWlDb25mQmFzZUZpbHRlciBleHRlbmRzIEthbHR1cmFGaWx0ZXIge1xuXG4gICAgaWRFcXVhbCA6IG51bWJlcjtcblx0aWRJbiA6IHN0cmluZztcblx0bmFtZUxpa2UgOiBzdHJpbmc7XG5cdHBhcnRuZXJJZEVxdWFsIDogbnVtYmVyO1xuXHRwYXJ0bmVySWRJbiA6IHN0cmluZztcblx0b2JqVHlwZUVxdWFsIDogS2FsdHVyYVVpQ29uZk9ialR5cGU7XG5cdG9ialR5cGVJbiA6IHN0cmluZztcblx0dGFnc011bHRpTGlrZU9yIDogc3RyaW5nO1xuXHR0YWdzTXVsdGlMaWtlQW5kIDogc3RyaW5nO1xuXHRjcmVhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWwgOiBEYXRlO1xuXHRjcmVhdGVkQXRMZXNzVGhhbk9yRXF1YWwgOiBEYXRlO1xuXHR1cGRhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWwgOiBEYXRlO1xuXHR1cGRhdGVkQXRMZXNzVGhhbk9yRXF1YWwgOiBEYXRlO1xuXHRjcmVhdGlvbk1vZGVFcXVhbCA6IEthbHR1cmFVaUNvbmZDcmVhdGlvbk1vZGU7XG5cdGNyZWF0aW9uTW9kZUluIDogc3RyaW5nO1xuXHR2ZXJzaW9uRXF1YWwgOiBzdHJpbmc7XG5cdHZlcnNpb25NdWx0aUxpa2VPciA6IHN0cmluZztcblx0dmVyc2lvbk11bHRpTGlrZUFuZCA6IHN0cmluZztcblx0cGFydG5lclRhZ3NNdWx0aUxpa2VPciA6IHN0cmluZztcblx0cGFydG5lclRhZ3NNdWx0aUxpa2VBbmQgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFVaUNvbmZCYXNlRmlsdGVyQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFVaUNvbmZCYXNlRmlsdGVyJyB9LFxuXHRcdFx0XHRpZEVxdWFsIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGlkSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0bmFtZUxpa2UgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cGFydG5lcklkRXF1YWwgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0cGFydG5lcklkSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0b2JqVHlwZUVxdWFsIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVVpQ29uZk9ialR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYVVpQ29uZk9ialR5cGUnIH0sXG5cdFx0XHRcdG9ialR5cGVJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR0YWdzTXVsdGlMaWtlT3IgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dGFnc011bHRpTGlrZUFuZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRjcmVhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnZCcgfSxcblx0XHRcdFx0Y3JlYXRlZEF0TGVzc1RoYW5PckVxdWFsIDogeyB0eXBlIDogJ2QnIH0sXG5cdFx0XHRcdHVwZGF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICdkJyB9LFxuXHRcdFx0XHR1cGRhdGVkQXRMZXNzVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnZCcgfSxcblx0XHRcdFx0Y3JlYXRpb25Nb2RlRXF1YWwgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhVWlDb25mQ3JlYXRpb25Nb2RlLCBzdWJUeXBlIDogJ0thbHR1cmFVaUNvbmZDcmVhdGlvbk1vZGUnIH0sXG5cdFx0XHRcdGNyZWF0aW9uTW9kZUluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHZlcnNpb25FcXVhbCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR2ZXJzaW9uTXVsdGlMaWtlT3IgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dmVyc2lvbk11bHRpTGlrZUFuZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRwYXJ0bmVyVGFnc011bHRpTGlrZU9yIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHBhcnRuZXJUYWdzTXVsdGlMaWtlQW5kIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFVaUNvbmZCYXNlRmlsdGVyJ10gPSBLYWx0dXJhVWlDb25mQmFzZUZpbHRlcjsiXX0=