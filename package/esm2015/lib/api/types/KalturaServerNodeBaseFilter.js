/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaServerNodeStatus } from './KalturaServerNodeStatus';
import { KalturaServerNodeType } from './KalturaServerNodeType';
import { KalturaFilter } from './KalturaFilter';
/**
 * @record
 */
export function KalturaServerNodeBaseFilterArgs() { }
/** @type {?|undefined} */
KalturaServerNodeBaseFilterArgs.prototype.idEqual;
/** @type {?|undefined} */
KalturaServerNodeBaseFilterArgs.prototype.idIn;
/** @type {?|undefined} */
KalturaServerNodeBaseFilterArgs.prototype.createdAtGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaServerNodeBaseFilterArgs.prototype.createdAtLessThanOrEqual;
/** @type {?|undefined} */
KalturaServerNodeBaseFilterArgs.prototype.updatedAtGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaServerNodeBaseFilterArgs.prototype.updatedAtLessThanOrEqual;
/** @type {?|undefined} */
KalturaServerNodeBaseFilterArgs.prototype.heartbeatTimeGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaServerNodeBaseFilterArgs.prototype.heartbeatTimeLessThanOrEqual;
/** @type {?|undefined} */
KalturaServerNodeBaseFilterArgs.prototype.nameEqual;
/** @type {?|undefined} */
KalturaServerNodeBaseFilterArgs.prototype.nameIn;
/** @type {?|undefined} */
KalturaServerNodeBaseFilterArgs.prototype.systemNameEqual;
/** @type {?|undefined} */
KalturaServerNodeBaseFilterArgs.prototype.systemNameIn;
/** @type {?|undefined} */
KalturaServerNodeBaseFilterArgs.prototype.hostNameLike;
/** @type {?|undefined} */
KalturaServerNodeBaseFilterArgs.prototype.hostNameMultiLikeOr;
/** @type {?|undefined} */
KalturaServerNodeBaseFilterArgs.prototype.hostNameMultiLikeAnd;
/** @type {?|undefined} */
KalturaServerNodeBaseFilterArgs.prototype.statusEqual;
/** @type {?|undefined} */
KalturaServerNodeBaseFilterArgs.prototype.statusIn;
/** @type {?|undefined} */
KalturaServerNodeBaseFilterArgs.prototype.typeEqual;
/** @type {?|undefined} */
KalturaServerNodeBaseFilterArgs.prototype.typeIn;
/** @type {?|undefined} */
KalturaServerNodeBaseFilterArgs.prototype.tagsLike;
/** @type {?|undefined} */
KalturaServerNodeBaseFilterArgs.prototype.tagsMultiLikeOr;
/** @type {?|undefined} */
KalturaServerNodeBaseFilterArgs.prototype.tagsMultiLikeAnd;
/** @type {?|undefined} */
KalturaServerNodeBaseFilterArgs.prototype.dcEqual;
/** @type {?|undefined} */
KalturaServerNodeBaseFilterArgs.prototype.dcIn;
/** @type {?|undefined} */
KalturaServerNodeBaseFilterArgs.prototype.parentIdLike;
/** @type {?|undefined} */
KalturaServerNodeBaseFilterArgs.prototype.parentIdMultiLikeOr;
/** @type {?|undefined} */
KalturaServerNodeBaseFilterArgs.prototype.parentIdMultiLikeAnd;
export class KalturaServerNodeBaseFilter extends KalturaFilter {
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
            objectType: { type: 'c', default: 'KalturaServerNodeBaseFilter' },
            idEqual: { type: 'n' },
            idIn: { type: 's' },
            createdAtGreaterThanOrEqual: { type: 'd' },
            createdAtLessThanOrEqual: { type: 'd' },
            updatedAtGreaterThanOrEqual: { type: 'd' },
            updatedAtLessThanOrEqual: { type: 'd' },
            heartbeatTimeGreaterThanOrEqual: { type: 'd' },
            heartbeatTimeLessThanOrEqual: { type: 'd' },
            nameEqual: { type: 's' },
            nameIn: { type: 's' },
            systemNameEqual: { type: 's' },
            systemNameIn: { type: 's' },
            hostNameLike: { type: 's' },
            hostNameMultiLikeOr: { type: 's' },
            hostNameMultiLikeAnd: { type: 's' },
            statusEqual: { type: 'en', subTypeConstructor: KalturaServerNodeStatus, subType: 'KalturaServerNodeStatus' },
            statusIn: { type: 's' },
            typeEqual: { type: 'es', subTypeConstructor: KalturaServerNodeType, subType: 'KalturaServerNodeType' },
            typeIn: { type: 's' },
            tagsLike: { type: 's' },
            tagsMultiLikeOr: { type: 's' },
            tagsMultiLikeAnd: { type: 's' },
            dcEqual: { type: 'n' },
            dcIn: { type: 's' },
            parentIdLike: { type: 's' },
            parentIdMultiLikeOr: { type: 's' },
            parentIdMultiLikeAnd: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaServerNodeBaseFilter.prototype.idEqual;
    /** @type {?} */
    KalturaServerNodeBaseFilter.prototype.idIn;
    /** @type {?} */
    KalturaServerNodeBaseFilter.prototype.createdAtGreaterThanOrEqual;
    /** @type {?} */
    KalturaServerNodeBaseFilter.prototype.createdAtLessThanOrEqual;
    /** @type {?} */
    KalturaServerNodeBaseFilter.prototype.updatedAtGreaterThanOrEqual;
    /** @type {?} */
    KalturaServerNodeBaseFilter.prototype.updatedAtLessThanOrEqual;
    /** @type {?} */
    KalturaServerNodeBaseFilter.prototype.heartbeatTimeGreaterThanOrEqual;
    /** @type {?} */
    KalturaServerNodeBaseFilter.prototype.heartbeatTimeLessThanOrEqual;
    /** @type {?} */
    KalturaServerNodeBaseFilter.prototype.nameEqual;
    /** @type {?} */
    KalturaServerNodeBaseFilter.prototype.nameIn;
    /** @type {?} */
    KalturaServerNodeBaseFilter.prototype.systemNameEqual;
    /** @type {?} */
    KalturaServerNodeBaseFilter.prototype.systemNameIn;
    /** @type {?} */
    KalturaServerNodeBaseFilter.prototype.hostNameLike;
    /** @type {?} */
    KalturaServerNodeBaseFilter.prototype.hostNameMultiLikeOr;
    /** @type {?} */
    KalturaServerNodeBaseFilter.prototype.hostNameMultiLikeAnd;
    /** @type {?} */
    KalturaServerNodeBaseFilter.prototype.statusEqual;
    /** @type {?} */
    KalturaServerNodeBaseFilter.prototype.statusIn;
    /** @type {?} */
    KalturaServerNodeBaseFilter.prototype.typeEqual;
    /** @type {?} */
    KalturaServerNodeBaseFilter.prototype.typeIn;
    /** @type {?} */
    KalturaServerNodeBaseFilter.prototype.tagsLike;
    /** @type {?} */
    KalturaServerNodeBaseFilter.prototype.tagsMultiLikeOr;
    /** @type {?} */
    KalturaServerNodeBaseFilter.prototype.tagsMultiLikeAnd;
    /** @type {?} */
    KalturaServerNodeBaseFilter.prototype.dcEqual;
    /** @type {?} */
    KalturaServerNodeBaseFilter.prototype.dcIn;
    /** @type {?} */
    KalturaServerNodeBaseFilter.prototype.parentIdLike;
    /** @type {?} */
    KalturaServerNodeBaseFilter.prototype.parentIdMultiLikeOr;
    /** @type {?} */
    KalturaServerNodeBaseFilter.prototype.parentIdMultiLikeAnd;
}
typesMappingStorage['KalturaServerNodeBaseFilter'] = KalturaServerNodeBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVNlcnZlck5vZGVCYXNlRmlsdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhU2VydmVyTm9kZUJhc2VGaWx0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNwRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsYUFBYSxFQUFxQixNQUFNLGlCQUFpQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlDbkUsTUFBTSxrQ0FBbUMsU0FBUSxhQUFhOzs7O0lBOEIxRCxZQUFZLElBQXVDO1FBRS9DLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyw2QkFBNkIsRUFBRTtZQUNoRixPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hCLElBQUksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDckIsMkJBQTJCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVDLHdCQUF3QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QywyQkFBMkIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUMsd0JBQXdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pDLCtCQUErQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNoRCw0QkFBNEIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDN0MsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQixNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3ZCLGVBQWUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDaEMsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM3QixZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzdCLG1CQUFtQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNwQyxvQkFBb0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDckMsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyx1QkFBdUIsRUFBRSxPQUFPLEVBQUcseUJBQXlCLEVBQUU7WUFDaEgsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHFCQUFxQixFQUFFLE9BQU8sRUFBRyx1QkFBdUIsRUFBRTtZQUMxRyxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3ZCLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNoQyxnQkFBZ0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDakMsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QixJQUFJLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3JCLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDN0IsbUJBQW1CLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3BDLG9CQUFvQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUM1QixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLDZCQUE2QixDQUFDLEdBQUcsMkJBQTJCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVNlcnZlck5vZGVTdGF0dXMgfSBmcm9tICcuL0thbHR1cmFTZXJ2ZXJOb2RlU3RhdHVzJztcbmltcG9ydCB7IEthbHR1cmFTZXJ2ZXJOb2RlVHlwZSB9IGZyb20gJy4vS2FsdHVyYVNlcnZlck5vZGVUeXBlJztcbmltcG9ydCB7IEthbHR1cmFGaWx0ZXIsIEthbHR1cmFGaWx0ZXJBcmdzIH0gZnJvbSAnLi9LYWx0dXJhRmlsdGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhU2VydmVyTm9kZUJhc2VGaWx0ZXJBcmdzICBleHRlbmRzIEthbHR1cmFGaWx0ZXJBcmdzIHtcbiAgICBpZEVxdWFsPyA6IG51bWJlcjtcblx0aWRJbj8gOiBzdHJpbmc7XG5cdGNyZWF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbD8gOiBEYXRlO1xuXHRjcmVhdGVkQXRMZXNzVGhhbk9yRXF1YWw/IDogRGF0ZTtcblx0dXBkYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsPyA6IERhdGU7XG5cdHVwZGF0ZWRBdExlc3NUaGFuT3JFcXVhbD8gOiBEYXRlO1xuXHRoZWFydGJlYXRUaW1lR3JlYXRlclRoYW5PckVxdWFsPyA6IERhdGU7XG5cdGhlYXJ0YmVhdFRpbWVMZXNzVGhhbk9yRXF1YWw/IDogRGF0ZTtcblx0bmFtZUVxdWFsPyA6IHN0cmluZztcblx0bmFtZUluPyA6IHN0cmluZztcblx0c3lzdGVtTmFtZUVxdWFsPyA6IHN0cmluZztcblx0c3lzdGVtTmFtZUluPyA6IHN0cmluZztcblx0aG9zdE5hbWVMaWtlPyA6IHN0cmluZztcblx0aG9zdE5hbWVNdWx0aUxpa2VPcj8gOiBzdHJpbmc7XG5cdGhvc3ROYW1lTXVsdGlMaWtlQW5kPyA6IHN0cmluZztcblx0c3RhdHVzRXF1YWw/IDogS2FsdHVyYVNlcnZlck5vZGVTdGF0dXM7XG5cdHN0YXR1c0luPyA6IHN0cmluZztcblx0dHlwZUVxdWFsPyA6IEthbHR1cmFTZXJ2ZXJOb2RlVHlwZTtcblx0dHlwZUluPyA6IHN0cmluZztcblx0dGFnc0xpa2U/IDogc3RyaW5nO1xuXHR0YWdzTXVsdGlMaWtlT3I/IDogc3RyaW5nO1xuXHR0YWdzTXVsdGlMaWtlQW5kPyA6IHN0cmluZztcblx0ZGNFcXVhbD8gOiBudW1iZXI7XG5cdGRjSW4/IDogc3RyaW5nO1xuXHRwYXJlbnRJZExpa2U/IDogc3RyaW5nO1xuXHRwYXJlbnRJZE11bHRpTGlrZU9yPyA6IHN0cmluZztcblx0cGFyZW50SWRNdWx0aUxpa2VBbmQ/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhU2VydmVyTm9kZUJhc2VGaWx0ZXIgZXh0ZW5kcyBLYWx0dXJhRmlsdGVyIHtcblxuICAgIGlkRXF1YWwgOiBudW1iZXI7XG5cdGlkSW4gOiBzdHJpbmc7XG5cdGNyZWF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbCA6IERhdGU7XG5cdGNyZWF0ZWRBdExlc3NUaGFuT3JFcXVhbCA6IERhdGU7XG5cdHVwZGF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbCA6IERhdGU7XG5cdHVwZGF0ZWRBdExlc3NUaGFuT3JFcXVhbCA6IERhdGU7XG5cdGhlYXJ0YmVhdFRpbWVHcmVhdGVyVGhhbk9yRXF1YWwgOiBEYXRlO1xuXHRoZWFydGJlYXRUaW1lTGVzc1RoYW5PckVxdWFsIDogRGF0ZTtcblx0bmFtZUVxdWFsIDogc3RyaW5nO1xuXHRuYW1lSW4gOiBzdHJpbmc7XG5cdHN5c3RlbU5hbWVFcXVhbCA6IHN0cmluZztcblx0c3lzdGVtTmFtZUluIDogc3RyaW5nO1xuXHRob3N0TmFtZUxpa2UgOiBzdHJpbmc7XG5cdGhvc3ROYW1lTXVsdGlMaWtlT3IgOiBzdHJpbmc7XG5cdGhvc3ROYW1lTXVsdGlMaWtlQW5kIDogc3RyaW5nO1xuXHRzdGF0dXNFcXVhbCA6IEthbHR1cmFTZXJ2ZXJOb2RlU3RhdHVzO1xuXHRzdGF0dXNJbiA6IHN0cmluZztcblx0dHlwZUVxdWFsIDogS2FsdHVyYVNlcnZlck5vZGVUeXBlO1xuXHR0eXBlSW4gOiBzdHJpbmc7XG5cdHRhZ3NMaWtlIDogc3RyaW5nO1xuXHR0YWdzTXVsdGlMaWtlT3IgOiBzdHJpbmc7XG5cdHRhZ3NNdWx0aUxpa2VBbmQgOiBzdHJpbmc7XG5cdGRjRXF1YWwgOiBudW1iZXI7XG5cdGRjSW4gOiBzdHJpbmc7XG5cdHBhcmVudElkTGlrZSA6IHN0cmluZztcblx0cGFyZW50SWRNdWx0aUxpa2VPciA6IHN0cmluZztcblx0cGFyZW50SWRNdWx0aUxpa2VBbmQgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFTZXJ2ZXJOb2RlQmFzZUZpbHRlckFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhU2VydmVyTm9kZUJhc2VGaWx0ZXInIH0sXG5cdFx0XHRcdGlkRXF1YWwgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0aWRJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRjcmVhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnZCcgfSxcblx0XHRcdFx0Y3JlYXRlZEF0TGVzc1RoYW5PckVxdWFsIDogeyB0eXBlIDogJ2QnIH0sXG5cdFx0XHRcdHVwZGF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICdkJyB9LFxuXHRcdFx0XHR1cGRhdGVkQXRMZXNzVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnZCcgfSxcblx0XHRcdFx0aGVhcnRiZWF0VGltZUdyZWF0ZXJUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICdkJyB9LFxuXHRcdFx0XHRoZWFydGJlYXRUaW1lTGVzc1RoYW5PckVxdWFsIDogeyB0eXBlIDogJ2QnIH0sXG5cdFx0XHRcdG5hbWVFcXVhbCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRuYW1lSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c3lzdGVtTmFtZUVxdWFsIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHN5c3RlbU5hbWVJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRob3N0TmFtZUxpa2UgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0aG9zdE5hbWVNdWx0aUxpa2VPciA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRob3N0TmFtZU11bHRpTGlrZUFuZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzdGF0dXNFcXVhbCA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFTZXJ2ZXJOb2RlU3RhdHVzLCBzdWJUeXBlIDogJ0thbHR1cmFTZXJ2ZXJOb2RlU3RhdHVzJyB9LFxuXHRcdFx0XHRzdGF0dXNJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR0eXBlRXF1YWwgOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhU2VydmVyTm9kZVR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYVNlcnZlck5vZGVUeXBlJyB9LFxuXHRcdFx0XHR0eXBlSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dGFnc0xpa2UgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dGFnc011bHRpTGlrZU9yIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHRhZ3NNdWx0aUxpa2VBbmQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZGNFcXVhbCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRkY0luIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHBhcmVudElkTGlrZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRwYXJlbnRJZE11bHRpTGlrZU9yIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHBhcmVudElkTXVsdGlMaWtlQW5kIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFTZXJ2ZXJOb2RlQmFzZUZpbHRlciddID0gS2FsdHVyYVNlcnZlck5vZGVCYXNlRmlsdGVyOyJdfQ==