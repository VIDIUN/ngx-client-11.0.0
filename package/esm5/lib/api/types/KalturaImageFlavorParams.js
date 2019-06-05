/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaFlavorParams } from './KalturaFlavorParams';
/**
 * @record
 */
export function KalturaImageFlavorParamsArgs() { }
/** @type {?|undefined} */
KalturaImageFlavorParamsArgs.prototype.densityWidth;
/** @type {?|undefined} */
KalturaImageFlavorParamsArgs.prototype.densityHeight;
/** @type {?|undefined} */
KalturaImageFlavorParamsArgs.prototype.sizeWidth;
/** @type {?|undefined} */
KalturaImageFlavorParamsArgs.prototype.sizeHeight;
/** @type {?|undefined} */
KalturaImageFlavorParamsArgs.prototype.depth;
var KalturaImageFlavorParams = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaImageFlavorParams, _super);
    function KalturaImageFlavorParams(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaImageFlavorParams.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaImageFlavorParams' },
            densityWidth: { type: 'n' },
            densityHeight: { type: 'n' },
            sizeWidth: { type: 'n' },
            sizeHeight: { type: 'n' },
            depth: { type: 'n' }
        });
        return result;
    };
    return KalturaImageFlavorParams;
}(KalturaFlavorParams));
export { KalturaImageFlavorParams };
if (false) {
    /** @type {?} */
    KalturaImageFlavorParams.prototype.densityWidth;
    /** @type {?} */
    KalturaImageFlavorParams.prototype.densityHeight;
    /** @type {?} */
    KalturaImageFlavorParams.prototype.sizeWidth;
    /** @type {?} */
    KalturaImageFlavorParams.prototype.sizeHeight;
    /** @type {?} */
    KalturaImageFlavorParams.prototype.depth;
}
typesMappingStorage['KalturaImageFlavorParams'] = KalturaImageFlavorParams;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUltYWdlRmxhdm9yUGFyYW1zLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhSW1hZ2VGbGF2b3JQYXJhbXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLG1CQUFtQixFQUEyQixNQUFNLHVCQUF1QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUFXckYsSUFBQTtJQUE4QyxvREFBbUI7SUFRN0Qsa0NBQVksSUFBb0M7ZUFFNUMsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUywrQ0FBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRywwQkFBMEIsRUFBRTtZQUM3RSxZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzdCLGFBQWEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDOUIsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQixVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzNCLEtBQUssRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDYixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO21DQXpDTDtFQWE4QyxtQkFBbUIsRUE2QmhFLENBQUE7QUE3QkQsb0NBNkJDOzs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsMEJBQTBCLENBQUMsR0FBRyx3QkFBd0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhRmxhdm9yUGFyYW1zLCBLYWx0dXJhRmxhdm9yUGFyYW1zQXJncyB9IGZyb20gJy4vS2FsdHVyYUZsYXZvclBhcmFtcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUltYWdlRmxhdm9yUGFyYW1zQXJncyAgZXh0ZW5kcyBLYWx0dXJhRmxhdm9yUGFyYW1zQXJncyB7XG4gICAgZGVuc2l0eVdpZHRoPyA6IG51bWJlcjtcblx0ZGVuc2l0eUhlaWdodD8gOiBudW1iZXI7XG5cdHNpemVXaWR0aD8gOiBudW1iZXI7XG5cdHNpemVIZWlnaHQ/IDogbnVtYmVyO1xuXHRkZXB0aD8gOiBudW1iZXI7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFJbWFnZUZsYXZvclBhcmFtcyBleHRlbmRzIEthbHR1cmFGbGF2b3JQYXJhbXMge1xuXG4gICAgZGVuc2l0eVdpZHRoIDogbnVtYmVyO1xuXHRkZW5zaXR5SGVpZ2h0IDogbnVtYmVyO1xuXHRzaXplV2lkdGggOiBudW1iZXI7XG5cdHNpemVIZWlnaHQgOiBudW1iZXI7XG5cdGRlcHRoIDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhSW1hZ2VGbGF2b3JQYXJhbXNBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUltYWdlRmxhdm9yUGFyYW1zJyB9LFxuXHRcdFx0XHRkZW5zaXR5V2lkdGggOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0ZGVuc2l0eUhlaWdodCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRzaXplV2lkdGggOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0c2l6ZUhlaWdodCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRkZXB0aCA6IHsgdHlwZSA6ICduJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhSW1hZ2VGbGF2b3JQYXJhbXMnXSA9IEthbHR1cmFJbWFnZUZsYXZvclBhcmFtczsiXX0=