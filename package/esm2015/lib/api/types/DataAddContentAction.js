/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { KalturaGenericDataCenterContentResource } from './KalturaGenericDataCenterContentResource';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function DataAddContentActionArgs() { }
/** @type {?} */
DataAddContentActionArgs.prototype.entryId;
/** @type {?} */
DataAddContentActionArgs.prototype.resource;
/**
 * Build request payload for service 'data' action 'addContent'.
 *
 * Usage: Update the dataContent of data entry using a resource
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 */
export class DataAddContentAction extends KalturaRequest {
    /**
     * @param {?} data
     */
    constructor(data) {
        super(data, { responseType: 's', responseSubType: '', responseConstructor: null });
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            service: { type: 'c', default: 'data' },
            action: { type: 'c', default: 'addContent' },
            entryId: { type: 's' },
            resource: { type: 'o', subTypeConstructor: KalturaGenericDataCenterContentResource, subType: 'KalturaGenericDataCenterContentResource' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    DataAddContentAction.prototype.entryId;
    /** @type {?} */
    DataAddContentAction.prototype.resource;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0YUFkZENvbnRlbnRBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0RhdGFBZGRDb250ZW50QWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFJQSxPQUFPLEVBQUUsdUNBQXVDLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUNwRyxPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQWV4RSxNQUFNLDJCQUE0QixTQUFRLGNBQXNCOzs7O0lBSzVELFlBQVksSUFBK0I7UUFFdkMsS0FBSyxDQUFDLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRyxHQUFHLEVBQUUsZUFBZSxFQUFHLEVBQUUsRUFBRSxtQkFBbUIsRUFBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0tBQ3hGOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxNQUFNLEVBQUU7WUFDdEQsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsWUFBWSxFQUFFO1lBQy9DLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyx1Q0FBdUMsRUFBRSxPQUFPLEVBQUcseUNBQXlDLEVBQUU7U0FDbkksQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcblxuXG5pbXBvcnQgeyBLYWx0dXJhR2VuZXJpY0RhdGFDZW50ZXJDb250ZW50UmVzb3VyY2UgfSBmcm9tICcuL0thbHR1cmFHZW5lcmljRGF0YUNlbnRlckNvbnRlbnRSZXNvdXJjZSc7XG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBEYXRhQWRkQ29udGVudEFjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICBlbnRyeUlkIDogc3RyaW5nO1xuXHRyZXNvdXJjZSA6IEthbHR1cmFHZW5lcmljRGF0YUNlbnRlckNvbnRlbnRSZXNvdXJjZTtcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ2RhdGEnIGFjdGlvbiAnYWRkQ29udGVudCcuXG4gKlxuICogVXNhZ2U6IFVwZGF0ZSB0aGUgZGF0YUNvbnRlbnQgb2YgZGF0YSBlbnRyeSB1c2luZyBhIHJlc291cmNlXG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgc3RyaW5nXG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBEYXRhQWRkQ29udGVudEFjdGlvbiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PHN0cmluZz4ge1xuXG4gICAgZW50cnlJZCA6IHN0cmluZztcblx0cmVzb3VyY2UgOiBLYWx0dXJhR2VuZXJpY0RhdGFDZW50ZXJDb250ZW50UmVzb3VyY2U7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogRGF0YUFkZENvbnRlbnRBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSwge3Jlc3BvbnNlVHlwZSA6ICdzJywgcmVzcG9uc2VTdWJUeXBlIDogJycsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBudWxsIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2RhdGEnIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdhZGRDb250ZW50JyB9LFxuXHRcdFx0XHRlbnRyeUlkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHJlc291cmNlIDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhR2VuZXJpY0RhdGFDZW50ZXJDb250ZW50UmVzb3VyY2UsIHN1YlR5cGUgOiAnS2FsdHVyYUdlbmVyaWNEYXRhQ2VudGVyQ29udGVudFJlc291cmNlJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=