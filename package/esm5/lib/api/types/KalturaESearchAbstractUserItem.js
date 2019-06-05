/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaESearchItemType } from './KalturaESearchItemType';
import { KalturaESearchRange } from './KalturaESearchRange';
import { KalturaESearchUserBaseItem } from './KalturaESearchUserBaseItem';
/**
 * @record
 */
export function KalturaESearchAbstractUserItemArgs() { }
/** @type {?|undefined} */
KalturaESearchAbstractUserItemArgs.prototype.searchTerm;
/** @type {?|undefined} */
KalturaESearchAbstractUserItemArgs.prototype.itemType;
/** @type {?|undefined} */
KalturaESearchAbstractUserItemArgs.prototype.range;
/** @type {?|undefined} */
KalturaESearchAbstractUserItemArgs.prototype.addHighlight;
var KalturaESearchAbstractUserItem = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaESearchAbstractUserItem, _super);
    function KalturaESearchAbstractUserItem(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaESearchAbstractUserItem.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaESearchAbstractUserItem' },
            searchTerm: { type: 's' },
            itemType: { type: 'en', subTypeConstructor: KalturaESearchItemType, subType: 'KalturaESearchItemType' },
            range: { type: 'o', subTypeConstructor: KalturaESearchRange, subType: 'KalturaESearchRange' },
            addHighlight: { type: 'b' }
        });
        return result;
    };
    return KalturaESearchAbstractUserItem;
}(KalturaESearchUserBaseItem));
export { KalturaESearchAbstractUserItem };
if (false) {
    /** @type {?} */
    KalturaESearchAbstractUserItem.prototype.searchTerm;
    /** @type {?} */
    KalturaESearchAbstractUserItem.prototype.itemType;
    /** @type {?} */
    KalturaESearchAbstractUserItem.prototype.range;
    /** @type {?} */
    KalturaESearchAbstractUserItem.prototype.addHighlight;
}
typesMappingStorage['KalturaESearchAbstractUserItem'] = KalturaESearchAbstractUserItem;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUVTZWFyY2hBYnN0cmFjdFVzZXJJdGVtLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhRVNlYXJjaEFic3RyYWN0VXNlckl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDbEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDNUQsT0FBTyxFQUFFLDBCQUEwQixFQUFrQyxNQUFNLDhCQUE4QixDQUFDOzs7Ozs7Ozs7Ozs7O0FBVTFHLElBQUE7SUFBb0QsMERBQTBCO0lBTzFFLHdDQUFZLElBQTBDO2VBRWxELGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMscURBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsZ0NBQWdDLEVBQUU7WUFDbkYsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMzQixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHNCQUFzQixFQUFFLE9BQU8sRUFBRyx3QkFBd0IsRUFBRTtZQUMzRyxLQUFLLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLG1CQUFtQixFQUFFLE9BQU8sRUFBRyxxQkFBcUIsRUFBRTtZQUNqRyxZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ3BCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7eUNBeENMO0VBY29ELDBCQUEwQixFQTJCN0UsQ0FBQTtBQTNCRCwwQ0EyQkM7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsZ0NBQWdDLENBQUMsR0FBRyw4QkFBOEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhRVNlYXJjaEl0ZW1UeXBlIH0gZnJvbSAnLi9LYWx0dXJhRVNlYXJjaEl0ZW1UeXBlJztcbmltcG9ydCB7IEthbHR1cmFFU2VhcmNoUmFuZ2UgfSBmcm9tICcuL0thbHR1cmFFU2VhcmNoUmFuZ2UnO1xuaW1wb3J0IHsgS2FsdHVyYUVTZWFyY2hVc2VyQmFzZUl0ZW0sIEthbHR1cmFFU2VhcmNoVXNlckJhc2VJdGVtQXJncyB9IGZyb20gJy4vS2FsdHVyYUVTZWFyY2hVc2VyQmFzZUl0ZW0nO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFFU2VhcmNoQWJzdHJhY3RVc2VySXRlbUFyZ3MgIGV4dGVuZHMgS2FsdHVyYUVTZWFyY2hVc2VyQmFzZUl0ZW1BcmdzIHtcbiAgICBzZWFyY2hUZXJtPyA6IHN0cmluZztcblx0aXRlbVR5cGU/IDogS2FsdHVyYUVTZWFyY2hJdGVtVHlwZTtcblx0cmFuZ2U/IDogS2FsdHVyYUVTZWFyY2hSYW5nZTtcblx0YWRkSGlnaGxpZ2h0PyA6IGJvb2xlYW47XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFFU2VhcmNoQWJzdHJhY3RVc2VySXRlbSBleHRlbmRzIEthbHR1cmFFU2VhcmNoVXNlckJhc2VJdGVtIHtcblxuICAgIHNlYXJjaFRlcm0gOiBzdHJpbmc7XG5cdGl0ZW1UeXBlIDogS2FsdHVyYUVTZWFyY2hJdGVtVHlwZTtcblx0cmFuZ2UgOiBLYWx0dXJhRVNlYXJjaFJhbmdlO1xuXHRhZGRIaWdobGlnaHQgOiBib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhRVNlYXJjaEFic3RyYWN0VXNlckl0ZW1BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUVTZWFyY2hBYnN0cmFjdFVzZXJJdGVtJyB9LFxuXHRcdFx0XHRzZWFyY2hUZXJtIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGl0ZW1UeXBlIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUVTZWFyY2hJdGVtVHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhRVNlYXJjaEl0ZW1UeXBlJyB9LFxuXHRcdFx0XHRyYW5nZSA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUVTZWFyY2hSYW5nZSwgc3ViVHlwZSA6ICdLYWx0dXJhRVNlYXJjaFJhbmdlJyB9LFxuXHRcdFx0XHRhZGRIaWdobGlnaHQgOiB7IHR5cGUgOiAnYicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUVTZWFyY2hBYnN0cmFjdFVzZXJJdGVtJ10gPSBLYWx0dXJhRVNlYXJjaEFic3RyYWN0VXNlckl0ZW07Il19