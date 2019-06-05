/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { KalturaThumbAsset } from './KalturaThumbAsset';
import { KalturaContentResource } from './KalturaContentResource';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function ThumbAssetSetContentActionArgs() { }
/** @type {?} */
ThumbAssetSetContentActionArgs.prototype.id;
/** @type {?} */
ThumbAssetSetContentActionArgs.prototype.contentResource;
/**
 * Build request payload for service 'thumbAsset' action 'setContent'.
 *
 * Usage: Update content of thumbnail asset
 *
 * Server response type:         KalturaThumbAsset
 * Server failure response type: KalturaAPIException
 */
export class ThumbAssetSetContentAction extends KalturaRequest {
    /**
     * @param {?} data
     */
    constructor(data) {
        super(data, { responseType: 'o', responseSubType: 'KalturaThumbAsset', responseConstructor: KalturaThumbAsset });
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            service: { type: 'c', default: 'thumbasset' },
            action: { type: 'c', default: 'setContent' },
            id: { type: 's' },
            contentResource: { type: 'o', subTypeConstructor: KalturaContentResource, subType: 'KalturaContentResource' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    ThumbAssetSetContentAction.prototype.id;
    /** @type {?} */
    ThumbAssetSetContentAction.prototype.contentResource;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGh1bWJBc3NldFNldENvbnRlbnRBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL1RodW1iQXNzZXRTZXRDb250ZW50QWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUV4RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQWV4RSxNQUFNLGlDQUFrQyxTQUFRLGNBQWlDOzs7O0lBSzdFLFlBQVksSUFBcUM7UUFFN0MsS0FBSyxDQUFDLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRyxHQUFHLEVBQUUsZUFBZSxFQUFHLG1CQUFtQixFQUFFLG1CQUFtQixFQUFHLGlCQUFpQixFQUFHLENBQUMsQ0FBQztLQUN2SDs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsWUFBWSxFQUFFO1lBQzVELE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLFlBQVksRUFBRTtZQUMvQyxFQUFFLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ25CLGVBQWUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsc0JBQXNCLEVBQUUsT0FBTyxFQUFHLHdCQUF3QixFQUFFO1NBQ3hHLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSiIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhVGh1bWJBc3NldCB9IGZyb20gJy4vS2FsdHVyYVRodW1iQXNzZXQnO1xuXG5pbXBvcnQgeyBLYWx0dXJhQ29udGVudFJlc291cmNlIH0gZnJvbSAnLi9LYWx0dXJhQ29udGVudFJlc291cmNlJztcbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFRodW1iQXNzZXRTZXRDb250ZW50QWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdEFyZ3Mge1xuICAgIGlkIDogc3RyaW5nO1xuXHRjb250ZW50UmVzb3VyY2UgOiBLYWx0dXJhQ29udGVudFJlc291cmNlO1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAndGh1bWJBc3NldCcgYWN0aW9uICdzZXRDb250ZW50Jy5cbiAqXG4gKiBVc2FnZTogVXBkYXRlIGNvbnRlbnQgb2YgdGh1bWJuYWlsIGFzc2V0XG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgS2FsdHVyYVRodW1iQXNzZXRcbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIFRodW1iQXNzZXRTZXRDb250ZW50QWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3Q8S2FsdHVyYVRodW1iQXNzZXQ+IHtcblxuICAgIGlkIDogc3RyaW5nO1xuXHRjb250ZW50UmVzb3VyY2UgOiBLYWx0dXJhQ29udGVudFJlc291cmNlO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSA6IFRodW1iQXNzZXRTZXRDb250ZW50QWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnbycsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhVGh1bWJBc3NldCcsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBLYWx0dXJhVGh1bWJBc3NldCAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAndGh1bWJhc3NldCcgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ3NldENvbnRlbnQnIH0sXG5cdFx0XHRcdGlkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGNvbnRlbnRSZXNvdXJjZSA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUNvbnRlbnRSZXNvdXJjZSwgc3ViVHlwZSA6ICdLYWx0dXJhQ29udGVudFJlc291cmNlJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=