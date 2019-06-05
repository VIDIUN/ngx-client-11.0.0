/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaApiParameterPermissionItemAction } from './KalturaApiParameterPermissionItemAction';
import { KalturaPermissionItem } from './KalturaPermissionItem';
/**
 * @record
 */
export function KalturaApiParameterPermissionItemArgs() { }
/** @type {?|undefined} */
KalturaApiParameterPermissionItemArgs.prototype.object;
/** @type {?|undefined} */
KalturaApiParameterPermissionItemArgs.prototype.parameter;
/** @type {?|undefined} */
KalturaApiParameterPermissionItemArgs.prototype.action;
export class KalturaApiParameterPermissionItem extends KalturaPermissionItem {
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
            objectType: { type: 'c', default: 'KalturaApiParameterPermissionItem' },
            object: { type: 's' },
            parameter: { type: 's' },
            action: { type: 'es', subTypeConstructor: KalturaApiParameterPermissionItemAction, subType: 'KalturaApiParameterPermissionItemAction' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaApiParameterPermissionItem.prototype.object;
    /** @type {?} */
    KalturaApiParameterPermissionItem.prototype.parameter;
    /** @type {?} */
    KalturaApiParameterPermissionItem.prototype.action;
}
typesMappingStorage['KalturaApiParameterPermissionItem'] = KalturaApiParameterPermissionItem;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUFwaVBhcmFtZXRlclBlcm1pc3Npb25JdGVtLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhQXBpUGFyYW1ldGVyUGVybWlzc2lvbkl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsdUNBQXVDLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUNwRyxPQUFPLEVBQUUscUJBQXFCLEVBQTZCLE1BQU0seUJBQXlCLENBQUM7Ozs7Ozs7Ozs7O0FBUzNGLE1BQU0sd0NBQXlDLFNBQVEscUJBQXFCOzs7O0lBTXhFLFlBQVksSUFBNkM7UUFFckQsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLG1DQUFtQyxFQUFFO1lBQ3RGLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdkIsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQixNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHVDQUF1QyxFQUFFLE9BQU8sRUFBRyx5Q0FBeUMsRUFBRTtTQUNsSSxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLG1DQUFtQyxDQUFDLEdBQUcsaUNBQWlDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUFwaVBhcmFtZXRlclBlcm1pc3Npb25JdGVtQWN0aW9uIH0gZnJvbSAnLi9LYWx0dXJhQXBpUGFyYW1ldGVyUGVybWlzc2lvbkl0ZW1BY3Rpb24nO1xuaW1wb3J0IHsgS2FsdHVyYVBlcm1pc3Npb25JdGVtLCBLYWx0dXJhUGVybWlzc2lvbkl0ZW1BcmdzIH0gZnJvbSAnLi9LYWx0dXJhUGVybWlzc2lvbkl0ZW0nO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFBcGlQYXJhbWV0ZXJQZXJtaXNzaW9uSXRlbUFyZ3MgIGV4dGVuZHMgS2FsdHVyYVBlcm1pc3Npb25JdGVtQXJncyB7XG4gICAgb2JqZWN0PyA6IHN0cmluZztcblx0cGFyYW1ldGVyPyA6IHN0cmluZztcblx0YWN0aW9uPyA6IEthbHR1cmFBcGlQYXJhbWV0ZXJQZXJtaXNzaW9uSXRlbUFjdGlvbjtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUFwaVBhcmFtZXRlclBlcm1pc3Npb25JdGVtIGV4dGVuZHMgS2FsdHVyYVBlcm1pc3Npb25JdGVtIHtcblxuICAgIG9iamVjdCA6IHN0cmluZztcblx0cGFyYW1ldGVyIDogc3RyaW5nO1xuXHRhY3Rpb24gOiBLYWx0dXJhQXBpUGFyYW1ldGVyUGVybWlzc2lvbkl0ZW1BY3Rpb247XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFBcGlQYXJhbWV0ZXJQZXJtaXNzaW9uSXRlbUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhQXBpUGFyYW1ldGVyUGVybWlzc2lvbkl0ZW0nIH0sXG5cdFx0XHRcdG9iamVjdCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRwYXJhbWV0ZXIgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUFwaVBhcmFtZXRlclBlcm1pc3Npb25JdGVtQWN0aW9uLCBzdWJUeXBlIDogJ0thbHR1cmFBcGlQYXJhbWV0ZXJQZXJtaXNzaW9uSXRlbUFjdGlvbicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUFwaVBhcmFtZXRlclBlcm1pc3Npb25JdGVtJ10gPSBLYWx0dXJhQXBpUGFyYW1ldGVyUGVybWlzc2lvbkl0ZW07Il19