/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaContentResource } from './KalturaContentResource';
/**
 * @record
 */
export function KalturaUrlResourceArgs() { }
/** @type {?|undefined} */
KalturaUrlResourceArgs.prototype.url;
/** @type {?|undefined} */
KalturaUrlResourceArgs.prototype.forceAsyncDownload;
export class KalturaUrlResource extends KalturaContentResource {
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
            objectType: { type: 'c', default: 'KalturaUrlResource' },
            url: { type: 's' },
            forceAsyncDownload: { type: 'b' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaUrlResource.prototype.url;
    /** @type {?} */
    KalturaUrlResource.prototype.forceAsyncDownload;
}
typesMappingStorage['KalturaUrlResource'] = KalturaUrlResource;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVVybFJlc291cmNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhVXJsUmVzb3VyY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsc0JBQXNCLEVBQThCLE1BQU0sMEJBQTBCLENBQUM7Ozs7Ozs7OztBQVE5RixNQUFNLHlCQUEwQixTQUFRLHNCQUFzQjs7OztJQUsxRCxZQUFZLElBQThCO1FBRXRDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxvQkFBb0IsRUFBRTtZQUN2RSxHQUFHLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3BCLGtCQUFrQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUMxQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLGtCQUFrQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFDb250ZW50UmVzb3VyY2UsIEthbHR1cmFDb250ZW50UmVzb3VyY2VBcmdzIH0gZnJvbSAnLi9LYWx0dXJhQ29udGVudFJlc291cmNlJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhVXJsUmVzb3VyY2VBcmdzICBleHRlbmRzIEthbHR1cmFDb250ZW50UmVzb3VyY2VBcmdzIHtcbiAgICB1cmw/IDogc3RyaW5nO1xuXHRmb3JjZUFzeW5jRG93bmxvYWQ/IDogYm9vbGVhbjtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYVVybFJlc291cmNlIGV4dGVuZHMgS2FsdHVyYUNvbnRlbnRSZXNvdXJjZSB7XG5cbiAgICB1cmwgOiBzdHJpbmc7XG5cdGZvcmNlQXN5bmNEb3dubG9hZCA6IGJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFVcmxSZXNvdXJjZUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhVXJsUmVzb3VyY2UnIH0sXG5cdFx0XHRcdHVybCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRmb3JjZUFzeW5jRG93bmxvYWQgOiB7IHR5cGUgOiAnYicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYVVybFJlc291cmNlJ10gPSBLYWx0dXJhVXJsUmVzb3VyY2U7Il19