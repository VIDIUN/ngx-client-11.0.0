/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectIdentifier } from './KalturaObjectIdentifier';
import { KalturaMrssExtensionMode } from './KalturaMrssExtensionMode';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaExtendingItemMrssParameterArgs() { }
/** @type {?|undefined} */
KalturaExtendingItemMrssParameterArgs.prototype.xpath;
/** @type {?|undefined} */
KalturaExtendingItemMrssParameterArgs.prototype.identifier;
/** @type {?|undefined} */
KalturaExtendingItemMrssParameterArgs.prototype.extensionMode;
export class KalturaExtendingItemMrssParameter extends KalturaObjectBase {
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
            objectType: { type: 'c', default: 'KalturaExtendingItemMrssParameter' },
            xpath: { type: 's' },
            identifier: { type: 'o', subTypeConstructor: KalturaObjectIdentifier, subType: 'KalturaObjectIdentifier' },
            extensionMode: { type: 'en', subTypeConstructor: KalturaMrssExtensionMode, subType: 'KalturaMrssExtensionMode' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaExtendingItemMrssParameter.prototype.xpath;
    /** @type {?} */
    KalturaExtendingItemMrssParameter.prototype.identifier;
    /** @type {?} */
    KalturaExtendingItemMrssParameter.prototype.extensionMode;
}
typesMappingStorage['KalturaExtendingItemMrssParameter'] = KalturaExtendingItemMrssParameter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUV4dGVuZGluZ0l0ZW1NcnNzUGFyYW1ldGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhRXh0ZW5kaW5nSXRlbU1yc3NQYXJhbWV0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN0RSxPQUFPLEVBQUUsaUJBQWlCLEVBQXlCLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7Ozs7O0FBU2xGLE1BQU0sd0NBQXlDLFNBQVEsaUJBQWlCOzs7O0lBTXBFLFlBQVksSUFBNkM7UUFFckQsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLG1DQUFtQyxFQUFFO1lBQ3RGLEtBQUssRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdEIsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyx1QkFBdUIsRUFBRSxPQUFPLEVBQUcseUJBQXlCLEVBQUU7WUFDOUcsYUFBYSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyx3QkFBd0IsRUFBRSxPQUFPLEVBQUcsMEJBQTBCLEVBQUU7U0FDM0csQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxtQ0FBbUMsQ0FBQyxHQUFHLGlDQUFpQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFPYmplY3RJZGVudGlmaWVyIH0gZnJvbSAnLi9LYWx0dXJhT2JqZWN0SWRlbnRpZmllcic7XG5pbXBvcnQgeyBLYWx0dXJhTXJzc0V4dGVuc2lvbk1vZGUgfSBmcm9tICcuL0thbHR1cmFNcnNzRXh0ZW5zaW9uTW9kZSc7XG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0QmFzZSwgS2FsdHVyYU9iamVjdEJhc2VBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUV4dGVuZGluZ0l0ZW1NcnNzUGFyYW1ldGVyQXJncyAgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZUFyZ3Mge1xuICAgIHhwYXRoPyA6IHN0cmluZztcblx0aWRlbnRpZmllcj8gOiBLYWx0dXJhT2JqZWN0SWRlbnRpZmllcjtcblx0ZXh0ZW5zaW9uTW9kZT8gOiBLYWx0dXJhTXJzc0V4dGVuc2lvbk1vZGU7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFFeHRlbmRpbmdJdGVtTXJzc1BhcmFtZXRlciBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlIHtcblxuICAgIHhwYXRoIDogc3RyaW5nO1xuXHRpZGVudGlmaWVyIDogS2FsdHVyYU9iamVjdElkZW50aWZpZXI7XG5cdGV4dGVuc2lvbk1vZGUgOiBLYWx0dXJhTXJzc0V4dGVuc2lvbk1vZGU7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFFeHRlbmRpbmdJdGVtTXJzc1BhcmFtZXRlckFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhRXh0ZW5kaW5nSXRlbU1yc3NQYXJhbWV0ZXInIH0sXG5cdFx0XHRcdHhwYXRoIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGlkZW50aWZpZXIgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFPYmplY3RJZGVudGlmaWVyLCBzdWJUeXBlIDogJ0thbHR1cmFPYmplY3RJZGVudGlmaWVyJyB9LFxuXHRcdFx0XHRleHRlbnNpb25Nb2RlIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYU1yc3NFeHRlbnNpb25Nb2RlLCBzdWJUeXBlIDogJ0thbHR1cmFNcnNzRXh0ZW5zaW9uTW9kZScgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUV4dGVuZGluZ0l0ZW1NcnNzUGFyYW1ldGVyJ10gPSBLYWx0dXJhRXh0ZW5kaW5nSXRlbU1yc3NQYXJhbWV0ZXI7Il19