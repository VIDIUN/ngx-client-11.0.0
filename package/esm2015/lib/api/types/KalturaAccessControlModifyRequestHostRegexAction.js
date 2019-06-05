/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaRuleAction } from './KalturaRuleAction';
/**
 * @record
 */
export function KalturaAccessControlModifyRequestHostRegexActionArgs() { }
/** @type {?|undefined} */
KalturaAccessControlModifyRequestHostRegexActionArgs.prototype.pattern;
/** @type {?|undefined} */
KalturaAccessControlModifyRequestHostRegexActionArgs.prototype.replacement;
/** @type {?|undefined} */
KalturaAccessControlModifyRequestHostRegexActionArgs.prototype.replacmenServerNodeId;
export class KalturaAccessControlModifyRequestHostRegexAction extends KalturaRuleAction {
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
            objectType: { type: 'c', default: 'KalturaAccessControlModifyRequestHostRegexAction' },
            pattern: { type: 's' },
            replacement: { type: 's' },
            replacmenServerNodeId: { type: 'n' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaAccessControlModifyRequestHostRegexAction.prototype.pattern;
    /** @type {?} */
    KalturaAccessControlModifyRequestHostRegexAction.prototype.replacement;
    /** @type {?} */
    KalturaAccessControlModifyRequestHostRegexAction.prototype.replacmenServerNodeId;
}
typesMappingStorage['KalturaAccessControlModifyRequestHostRegexAction'] = KalturaAccessControlModifyRequestHostRegexAction;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUFjY2Vzc0NvbnRyb2xNb2RpZnlSZXF1ZXN0SG9zdFJlZ2V4QWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhQWNjZXNzQ29udHJvbE1vZGlmeVJlcXVlc3RIb3N0UmVnZXhBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsaUJBQWlCLEVBQXlCLE1BQU0scUJBQXFCLENBQUM7Ozs7Ozs7Ozs7O0FBUy9FLE1BQU0sdURBQXdELFNBQVEsaUJBQWlCOzs7O0lBTW5GLFlBQVksSUFBNEQ7UUFFcEUsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGtEQUFrRCxFQUFFO1lBQ3JHLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1QixxQkFBcUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDN0IsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxrREFBa0QsQ0FBQyxHQUFHLGdEQUFnRCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFSdWxlQWN0aW9uLCBLYWx0dXJhUnVsZUFjdGlvbkFyZ3MgfSBmcm9tICcuL0thbHR1cmFSdWxlQWN0aW9uJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhQWNjZXNzQ29udHJvbE1vZGlmeVJlcXVlc3RIb3N0UmVnZXhBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSdWxlQWN0aW9uQXJncyB7XG4gICAgcGF0dGVybj8gOiBzdHJpbmc7XG5cdHJlcGxhY2VtZW50PyA6IHN0cmluZztcblx0cmVwbGFjbWVuU2VydmVyTm9kZUlkPyA6IG51bWJlcjtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUFjY2Vzc0NvbnRyb2xNb2RpZnlSZXF1ZXN0SG9zdFJlZ2V4QWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJ1bGVBY3Rpb24ge1xuXG4gICAgcGF0dGVybiA6IHN0cmluZztcblx0cmVwbGFjZW1lbnQgOiBzdHJpbmc7XG5cdHJlcGxhY21lblNlcnZlck5vZGVJZCA6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUFjY2Vzc0NvbnRyb2xNb2RpZnlSZXF1ZXN0SG9zdFJlZ2V4QWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFBY2Nlc3NDb250cm9sTW9kaWZ5UmVxdWVzdEhvc3RSZWdleEFjdGlvbicgfSxcblx0XHRcdFx0cGF0dGVybiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRyZXBsYWNlbWVudCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRyZXBsYWNtZW5TZXJ2ZXJOb2RlSWQgOiB7IHR5cGUgOiAnbicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUFjY2Vzc0NvbnRyb2xNb2RpZnlSZXF1ZXN0SG9zdFJlZ2V4QWN0aW9uJ10gPSBLYWx0dXJhQWNjZXNzQ29udHJvbE1vZGlmeVJlcXVlc3RIb3N0UmVnZXhBY3Rpb247Il19