/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaExtendingItemMrssParameter } from './KalturaExtendingItemMrssParameter';
import { KalturaGenericSyndicationFeed } from './KalturaGenericSyndicationFeed';
/**
 * @record
 */
export function KalturaGenericXsltSyndicationFeedArgs() { }
/** @type {?|undefined} */
KalturaGenericXsltSyndicationFeedArgs.prototype.xslt;
/** @type {?|undefined} */
KalturaGenericXsltSyndicationFeedArgs.prototype.itemXpathsToExtend;
export class KalturaGenericXsltSyndicationFeed extends KalturaGenericSyndicationFeed {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
        if (typeof this.itemXpathsToExtend === 'undefined')
            this.itemXpathsToExtend = [];
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaGenericXsltSyndicationFeed' },
            xslt: { type: 's' },
            itemXpathsToExtend: { type: 'a', subTypeConstructor: KalturaExtendingItemMrssParameter, subType: 'KalturaExtendingItemMrssParameter' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaGenericXsltSyndicationFeed.prototype.xslt;
    /** @type {?} */
    KalturaGenericXsltSyndicationFeed.prototype.itemXpathsToExtend;
}
typesMappingStorage['KalturaGenericXsltSyndicationFeed'] = KalturaGenericXsltSyndicationFeed;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUdlbmVyaWNYc2x0U3luZGljYXRpb25GZWVkLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhR2VuZXJpY1hzbHRTeW5kaWNhdGlvbkZlZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUN4RixPQUFPLEVBQUUsNkJBQTZCLEVBQXFDLE1BQU0saUNBQWlDLENBQUM7Ozs7Ozs7OztBQVFuSCxNQUFNLHdDQUF5QyxTQUFRLDZCQUE2Qjs7OztJQUtoRixZQUFZLElBQTZDO1FBRXJELEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNaLEVBQUUsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixLQUFLLFdBQVcsQ0FBQztZQUFDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxFQUFFLENBQUM7S0FDcEY7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLG1DQUFtQyxFQUFFO1lBQ3RGLElBQUksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDckIsa0JBQWtCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLGlDQUFpQyxFQUFFLE9BQU8sRUFBRyxtQ0FBbUMsRUFBRTtTQUNqSSxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxtQ0FBbUMsQ0FBQyxHQUFHLGlDQUFpQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFFeHRlbmRpbmdJdGVtTXJzc1BhcmFtZXRlciB9IGZyb20gJy4vS2FsdHVyYUV4dGVuZGluZ0l0ZW1NcnNzUGFyYW1ldGVyJztcbmltcG9ydCB7IEthbHR1cmFHZW5lcmljU3luZGljYXRpb25GZWVkLCBLYWx0dXJhR2VuZXJpY1N5bmRpY2F0aW9uRmVlZEFyZ3MgfSBmcm9tICcuL0thbHR1cmFHZW5lcmljU3luZGljYXRpb25GZWVkJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhR2VuZXJpY1hzbHRTeW5kaWNhdGlvbkZlZWRBcmdzICBleHRlbmRzIEthbHR1cmFHZW5lcmljU3luZGljYXRpb25GZWVkQXJncyB7XG4gICAgeHNsdD8gOiBzdHJpbmc7XG5cdGl0ZW1YcGF0aHNUb0V4dGVuZD8gOiBLYWx0dXJhRXh0ZW5kaW5nSXRlbU1yc3NQYXJhbWV0ZXJbXTtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUdlbmVyaWNYc2x0U3luZGljYXRpb25GZWVkIGV4dGVuZHMgS2FsdHVyYUdlbmVyaWNTeW5kaWNhdGlvbkZlZWQge1xuXG4gICAgeHNsdCA6IHN0cmluZztcblx0aXRlbVhwYXRoc1RvRXh0ZW5kIDogS2FsdHVyYUV4dGVuZGluZ0l0ZW1NcnNzUGFyYW1ldGVyW107XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFHZW5lcmljWHNsdFN5bmRpY2F0aW9uRmVlZEFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLml0ZW1YcGF0aHNUb0V4dGVuZCA9PT0gJ3VuZGVmaW5lZCcpIHRoaXMuaXRlbVhwYXRoc1RvRXh0ZW5kID0gW107XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUdlbmVyaWNYc2x0U3luZGljYXRpb25GZWVkJyB9LFxuXHRcdFx0XHR4c2x0IDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGl0ZW1YcGF0aHNUb0V4dGVuZCA6IHsgdHlwZSA6ICdhJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUV4dGVuZGluZ0l0ZW1NcnNzUGFyYW1ldGVyLCBzdWJUeXBlIDogJ0thbHR1cmFFeHRlbmRpbmdJdGVtTXJzc1BhcmFtZXRlcicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUdlbmVyaWNYc2x0U3luZGljYXRpb25GZWVkJ10gPSBLYWx0dXJhR2VuZXJpY1hzbHRTeW5kaWNhdGlvbkZlZWQ7Il19