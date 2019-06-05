/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaFeedItemInfo } from './KalturaFeedItemInfo';
import { KalturaDropFolder } from './KalturaDropFolder';
/**
 * @record
 */
export function KalturaFeedDropFolderArgs() { }
/** @type {?|undefined} */
KalturaFeedDropFolderArgs.prototype.itemHandlingLimit;
/** @type {?|undefined} */
KalturaFeedDropFolderArgs.prototype.feedItemInfo;
var KalturaFeedDropFolder = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaFeedDropFolder, _super);
    function KalturaFeedDropFolder(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaFeedDropFolder.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaFeedDropFolder' },
            itemHandlingLimit: { type: 'n' },
            feedItemInfo: { type: 'o', subTypeConstructor: KalturaFeedItemInfo, subType: 'KalturaFeedItemInfo' }
        });
        return result;
    };
    return KalturaFeedDropFolder;
}(KalturaDropFolder));
export { KalturaFeedDropFolder };
if (false) {
    /** @type {?} */
    KalturaFeedDropFolder.prototype.itemHandlingLimit;
    /** @type {?} */
    KalturaFeedDropFolder.prototype.feedItemInfo;
}
typesMappingStorage['KalturaFeedDropFolder'] = KalturaFeedDropFolder;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUZlZWREcm9wRm9sZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhRmVlZERyb3BGb2xkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGlCQUFpQixFQUF5QixNQUFNLHFCQUFxQixDQUFDOzs7Ozs7Ozs7QUFRL0UsSUFBQTtJQUEyQyxpREFBaUI7SUFLeEQsK0JBQVksSUFBaUM7ZUFFekMsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyw0Q0FBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyx1QkFBdUIsRUFBRTtZQUMxRSxpQkFBaUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDbEMsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxtQkFBbUIsRUFBRSxPQUFPLEVBQUcscUJBQXFCLEVBQUU7U0FDL0YsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtnQ0FqQ0w7RUFXMkMsaUJBQWlCLEVBdUIzRCxDQUFBO0FBdkJELGlDQXVCQzs7Ozs7OztBQUVELG1CQUFtQixDQUFDLHVCQUF1QixDQUFDLEdBQUcscUJBQXFCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUZlZWRJdGVtSW5mbyB9IGZyb20gJy4vS2FsdHVyYUZlZWRJdGVtSW5mbyc7XG5pbXBvcnQgeyBLYWx0dXJhRHJvcEZvbGRlciwgS2FsdHVyYURyb3BGb2xkZXJBcmdzIH0gZnJvbSAnLi9LYWx0dXJhRHJvcEZvbGRlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUZlZWREcm9wRm9sZGVyQXJncyAgZXh0ZW5kcyBLYWx0dXJhRHJvcEZvbGRlckFyZ3Mge1xuICAgIGl0ZW1IYW5kbGluZ0xpbWl0PyA6IG51bWJlcjtcblx0ZmVlZEl0ZW1JbmZvPyA6IEthbHR1cmFGZWVkSXRlbUluZm87XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFGZWVkRHJvcEZvbGRlciBleHRlbmRzIEthbHR1cmFEcm9wRm9sZGVyIHtcblxuICAgIGl0ZW1IYW5kbGluZ0xpbWl0IDogbnVtYmVyO1xuXHRmZWVkSXRlbUluZm8gOiBLYWx0dXJhRmVlZEl0ZW1JbmZvO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhRmVlZERyb3BGb2xkZXJBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUZlZWREcm9wRm9sZGVyJyB9LFxuXHRcdFx0XHRpdGVtSGFuZGxpbmdMaW1pdCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRmZWVkSXRlbUluZm8gOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFGZWVkSXRlbUluZm8sIHN1YlR5cGUgOiAnS2FsdHVyYUZlZWRJdGVtSW5mbycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUZlZWREcm9wRm9sZGVyJ10gPSBLYWx0dXJhRmVlZERyb3BGb2xkZXI7Il19