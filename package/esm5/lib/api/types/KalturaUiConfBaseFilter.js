/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var KalturaUiConfBaseFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaUiConfBaseFilter, _super);
    function KalturaUiConfBaseFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaUiConfBaseFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
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
    };
    return KalturaUiConfBaseFilter;
}(KalturaFilter));
export { KalturaUiConfBaseFilter };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVVpQ29uZkJhc2VGaWx0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFVaUNvbmZCYXNlRmlsdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzlELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxhQUFhLEVBQXFCLE1BQU0saUJBQWlCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTBCbkUsSUFBQTtJQUE2QyxtREFBYTtJQXVCdEQsaUNBQVksSUFBbUM7ZUFFM0Msa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyw4Q0FBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyx5QkFBeUIsRUFBRTtZQUM1RSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hCLElBQUksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDckIsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixjQUFjLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQy9CLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUIsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxvQkFBb0IsRUFBRSxPQUFPLEVBQUcsc0JBQXNCLEVBQUU7WUFDM0csU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQixlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2hDLGdCQUFnQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNqQywyQkFBMkIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUMsd0JBQXdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pDLDJCQUEyQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1Qyx3QkFBd0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekMsaUJBQWlCLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHlCQUF5QixFQUFFLE9BQU8sRUFBRywyQkFBMkIsRUFBRTtZQUMxSCxjQUFjLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQy9CLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDN0Isa0JBQWtCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ25DLG1CQUFtQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNwQyxzQkFBc0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdkMsdUJBQXVCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQy9CLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7a0NBeEZMO0VBOEI2QyxhQUFhLEVBMkR6RCxDQUFBO0FBM0RELG1DQTJEQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLHlCQUF5QixDQUFDLEdBQUcsdUJBQXVCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVVpQ29uZk9ialR5cGUgfSBmcm9tICcuL0thbHR1cmFVaUNvbmZPYmpUeXBlJztcbmltcG9ydCB7IEthbHR1cmFVaUNvbmZDcmVhdGlvbk1vZGUgfSBmcm9tICcuL0thbHR1cmFVaUNvbmZDcmVhdGlvbk1vZGUnO1xuaW1wb3J0IHsgS2FsdHVyYUZpbHRlciwgS2FsdHVyYUZpbHRlckFyZ3MgfSBmcm9tICcuL0thbHR1cmFGaWx0ZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFVaUNvbmZCYXNlRmlsdGVyQXJncyAgZXh0ZW5kcyBLYWx0dXJhRmlsdGVyQXJncyB7XG4gICAgaWRFcXVhbD8gOiBudW1iZXI7XG5cdGlkSW4/IDogc3RyaW5nO1xuXHRuYW1lTGlrZT8gOiBzdHJpbmc7XG5cdHBhcnRuZXJJZEVxdWFsPyA6IG51bWJlcjtcblx0cGFydG5lcklkSW4/IDogc3RyaW5nO1xuXHRvYmpUeXBlRXF1YWw/IDogS2FsdHVyYVVpQ29uZk9ialR5cGU7XG5cdG9ialR5cGVJbj8gOiBzdHJpbmc7XG5cdHRhZ3NNdWx0aUxpa2VPcj8gOiBzdHJpbmc7XG5cdHRhZ3NNdWx0aUxpa2VBbmQ/IDogc3RyaW5nO1xuXHRjcmVhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWw/IDogRGF0ZTtcblx0Y3JlYXRlZEF0TGVzc1RoYW5PckVxdWFsPyA6IERhdGU7XG5cdHVwZGF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbD8gOiBEYXRlO1xuXHR1cGRhdGVkQXRMZXNzVGhhbk9yRXF1YWw/IDogRGF0ZTtcblx0Y3JlYXRpb25Nb2RlRXF1YWw/IDogS2FsdHVyYVVpQ29uZkNyZWF0aW9uTW9kZTtcblx0Y3JlYXRpb25Nb2RlSW4/IDogc3RyaW5nO1xuXHR2ZXJzaW9uRXF1YWw/IDogc3RyaW5nO1xuXHR2ZXJzaW9uTXVsdGlMaWtlT3I/IDogc3RyaW5nO1xuXHR2ZXJzaW9uTXVsdGlMaWtlQW5kPyA6IHN0cmluZztcblx0cGFydG5lclRhZ3NNdWx0aUxpa2VPcj8gOiBzdHJpbmc7XG5cdHBhcnRuZXJUYWdzTXVsdGlMaWtlQW5kPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYVVpQ29uZkJhc2VGaWx0ZXIgZXh0ZW5kcyBLYWx0dXJhRmlsdGVyIHtcblxuICAgIGlkRXF1YWwgOiBudW1iZXI7XG5cdGlkSW4gOiBzdHJpbmc7XG5cdG5hbWVMaWtlIDogc3RyaW5nO1xuXHRwYXJ0bmVySWRFcXVhbCA6IG51bWJlcjtcblx0cGFydG5lcklkSW4gOiBzdHJpbmc7XG5cdG9ialR5cGVFcXVhbCA6IEthbHR1cmFVaUNvbmZPYmpUeXBlO1xuXHRvYmpUeXBlSW4gOiBzdHJpbmc7XG5cdHRhZ3NNdWx0aUxpa2VPciA6IHN0cmluZztcblx0dGFnc011bHRpTGlrZUFuZCA6IHN0cmluZztcblx0Y3JlYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsIDogRGF0ZTtcblx0Y3JlYXRlZEF0TGVzc1RoYW5PckVxdWFsIDogRGF0ZTtcblx0dXBkYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsIDogRGF0ZTtcblx0dXBkYXRlZEF0TGVzc1RoYW5PckVxdWFsIDogRGF0ZTtcblx0Y3JlYXRpb25Nb2RlRXF1YWwgOiBLYWx0dXJhVWlDb25mQ3JlYXRpb25Nb2RlO1xuXHRjcmVhdGlvbk1vZGVJbiA6IHN0cmluZztcblx0dmVyc2lvbkVxdWFsIDogc3RyaW5nO1xuXHR2ZXJzaW9uTXVsdGlMaWtlT3IgOiBzdHJpbmc7XG5cdHZlcnNpb25NdWx0aUxpa2VBbmQgOiBzdHJpbmc7XG5cdHBhcnRuZXJUYWdzTXVsdGlMaWtlT3IgOiBzdHJpbmc7XG5cdHBhcnRuZXJUYWdzTXVsdGlMaWtlQW5kIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhVWlDb25mQmFzZUZpbHRlckFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhVWlDb25mQmFzZUZpbHRlcicgfSxcblx0XHRcdFx0aWRFcXVhbCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRpZEluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdG5hbWVMaWtlIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHBhcnRuZXJJZEVxdWFsIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHBhcnRuZXJJZEluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdG9ialR5cGVFcXVhbCA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFVaUNvbmZPYmpUeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFVaUNvbmZPYmpUeXBlJyB9LFxuXHRcdFx0XHRvYmpUeXBlSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dGFnc011bHRpTGlrZU9yIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHRhZ3NNdWx0aUxpa2VBbmQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Y3JlYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsIDogeyB0eXBlIDogJ2QnIH0sXG5cdFx0XHRcdGNyZWF0ZWRBdExlc3NUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICdkJyB9LFxuXHRcdFx0XHR1cGRhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnZCcgfSxcblx0XHRcdFx0dXBkYXRlZEF0TGVzc1RoYW5PckVxdWFsIDogeyB0eXBlIDogJ2QnIH0sXG5cdFx0XHRcdGNyZWF0aW9uTW9kZUVxdWFsIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVVpQ29uZkNyZWF0aW9uTW9kZSwgc3ViVHlwZSA6ICdLYWx0dXJhVWlDb25mQ3JlYXRpb25Nb2RlJyB9LFxuXHRcdFx0XHRjcmVhdGlvbk1vZGVJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR2ZXJzaW9uRXF1YWwgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dmVyc2lvbk11bHRpTGlrZU9yIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHZlcnNpb25NdWx0aUxpa2VBbmQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cGFydG5lclRhZ3NNdWx0aUxpa2VPciA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRwYXJ0bmVyVGFnc011bHRpTGlrZUFuZCA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhVWlDb25mQmFzZUZpbHRlciddID0gS2FsdHVyYVVpQ29uZkJhc2VGaWx0ZXI7Il19