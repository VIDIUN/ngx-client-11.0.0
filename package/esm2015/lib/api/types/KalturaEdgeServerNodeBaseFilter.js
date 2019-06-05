/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaDeliveryServerNodeFilter } from './KalturaDeliveryServerNodeFilter';
/**
 * @record
 */
export function KalturaEdgeServerNodeBaseFilterArgs() { }
/** @type {?|undefined} */
KalturaEdgeServerNodeBaseFilterArgs.prototype.playbackDomainLike;
/** @type {?|undefined} */
KalturaEdgeServerNodeBaseFilterArgs.prototype.playbackDomainMultiLikeOr;
/** @type {?|undefined} */
KalturaEdgeServerNodeBaseFilterArgs.prototype.playbackDomainMultiLikeAnd;
export class KalturaEdgeServerNodeBaseFilter extends KalturaDeliveryServerNodeFilter {
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
            objectType: { type: 'c', default: 'KalturaEdgeServerNodeBaseFilter' },
            playbackDomainLike: { type: 's' },
            playbackDomainMultiLikeOr: { type: 's' },
            playbackDomainMultiLikeAnd: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaEdgeServerNodeBaseFilter.prototype.playbackDomainLike;
    /** @type {?} */
    KalturaEdgeServerNodeBaseFilter.prototype.playbackDomainMultiLikeOr;
    /** @type {?} */
    KalturaEdgeServerNodeBaseFilter.prototype.playbackDomainMultiLikeAnd;
}
typesMappingStorage['KalturaEdgeServerNodeBaseFilter'] = KalturaEdgeServerNodeBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUVkZ2VTZXJ2ZXJOb2RlQmFzZUZpbHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUVkZ2VTZXJ2ZXJOb2RlQmFzZUZpbHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSwrQkFBK0IsRUFBdUMsTUFBTSxtQ0FBbUMsQ0FBQzs7Ozs7Ozs7Ozs7QUFTekgsTUFBTSxzQ0FBdUMsU0FBUSwrQkFBK0I7Ozs7SUFNaEYsWUFBWSxJQUEyQztRQUVuRCxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsaUNBQWlDLEVBQUU7WUFDcEYsa0JBQWtCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ25DLHlCQUF5QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQywwQkFBMEIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDbEMsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxpQ0FBaUMsQ0FBQyxHQUFHLCtCQUErQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFEZWxpdmVyeVNlcnZlck5vZGVGaWx0ZXIsIEthbHR1cmFEZWxpdmVyeVNlcnZlck5vZGVGaWx0ZXJBcmdzIH0gZnJvbSAnLi9LYWx0dXJhRGVsaXZlcnlTZXJ2ZXJOb2RlRmlsdGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhRWRnZVNlcnZlck5vZGVCYXNlRmlsdGVyQXJncyAgZXh0ZW5kcyBLYWx0dXJhRGVsaXZlcnlTZXJ2ZXJOb2RlRmlsdGVyQXJncyB7XG4gICAgcGxheWJhY2tEb21haW5MaWtlPyA6IHN0cmluZztcblx0cGxheWJhY2tEb21haW5NdWx0aUxpa2VPcj8gOiBzdHJpbmc7XG5cdHBsYXliYWNrRG9tYWluTXVsdGlMaWtlQW5kPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUVkZ2VTZXJ2ZXJOb2RlQmFzZUZpbHRlciBleHRlbmRzIEthbHR1cmFEZWxpdmVyeVNlcnZlck5vZGVGaWx0ZXIge1xuXG4gICAgcGxheWJhY2tEb21haW5MaWtlIDogc3RyaW5nO1xuXHRwbGF5YmFja0RvbWFpbk11bHRpTGlrZU9yIDogc3RyaW5nO1xuXHRwbGF5YmFja0RvbWFpbk11bHRpTGlrZUFuZCA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUVkZ2VTZXJ2ZXJOb2RlQmFzZUZpbHRlckFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhRWRnZVNlcnZlck5vZGVCYXNlRmlsdGVyJyB9LFxuXHRcdFx0XHRwbGF5YmFja0RvbWFpbkxpa2UgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cGxheWJhY2tEb21haW5NdWx0aUxpa2VPciA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRwbGF5YmFja0RvbWFpbk11bHRpTGlrZUFuZCA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhRWRnZVNlcnZlck5vZGVCYXNlRmlsdGVyJ10gPSBLYWx0dXJhRWRnZVNlcnZlck5vZGVCYXNlRmlsdGVyOyJdfQ==