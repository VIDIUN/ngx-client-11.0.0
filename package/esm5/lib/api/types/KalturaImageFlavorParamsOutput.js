/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaFlavorParamsOutput } from './KalturaFlavorParamsOutput';
/**
 * @record
 */
export function KalturaImageFlavorParamsOutputArgs() { }
/** @type {?|undefined} */
KalturaImageFlavorParamsOutputArgs.prototype.densityWidth;
/** @type {?|undefined} */
KalturaImageFlavorParamsOutputArgs.prototype.densityHeight;
/** @type {?|undefined} */
KalturaImageFlavorParamsOutputArgs.prototype.sizeWidth;
/** @type {?|undefined} */
KalturaImageFlavorParamsOutputArgs.prototype.sizeHeight;
/** @type {?|undefined} */
KalturaImageFlavorParamsOutputArgs.prototype.depth;
var KalturaImageFlavorParamsOutput = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaImageFlavorParamsOutput, _super);
    function KalturaImageFlavorParamsOutput(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaImageFlavorParamsOutput.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaImageFlavorParamsOutput' },
            densityWidth: { type: 'n' },
            densityHeight: { type: 'n' },
            sizeWidth: { type: 'n' },
            sizeHeight: { type: 'n' },
            depth: { type: 'n' }
        });
        return result;
    };
    return KalturaImageFlavorParamsOutput;
}(KalturaFlavorParamsOutput));
export { KalturaImageFlavorParamsOutput };
if (false) {
    /** @type {?} */
    KalturaImageFlavorParamsOutput.prototype.densityWidth;
    /** @type {?} */
    KalturaImageFlavorParamsOutput.prototype.densityHeight;
    /** @type {?} */
    KalturaImageFlavorParamsOutput.prototype.sizeWidth;
    /** @type {?} */
    KalturaImageFlavorParamsOutput.prototype.sizeHeight;
    /** @type {?} */
    KalturaImageFlavorParamsOutput.prototype.depth;
}
typesMappingStorage['KalturaImageFlavorParamsOutput'] = KalturaImageFlavorParamsOutput;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUltYWdlRmxhdm9yUGFyYW1zT3V0cHV0LmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhSW1hZ2VGbGF2b3JQYXJhbXNPdXRwdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHlCQUF5QixFQUFpQyxNQUFNLDZCQUE2QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUFXdkcsSUFBQTtJQUFvRCwwREFBeUI7SUFRekUsd0NBQVksSUFBMEM7ZUFFbEQsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyxxREFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxnQ0FBZ0MsRUFBRTtZQUNuRixZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzdCLGFBQWEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDOUIsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQixVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzNCLEtBQUssRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDYixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO3lDQXpDTDtFQWFvRCx5QkFBeUIsRUE2QjVFLENBQUE7QUE3QkQsMENBNkJDOzs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsZ0NBQWdDLENBQUMsR0FBRyw4QkFBOEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhRmxhdm9yUGFyYW1zT3V0cHV0LCBLYWx0dXJhRmxhdm9yUGFyYW1zT3V0cHV0QXJncyB9IGZyb20gJy4vS2FsdHVyYUZsYXZvclBhcmFtc091dHB1dCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUltYWdlRmxhdm9yUGFyYW1zT3V0cHV0QXJncyAgZXh0ZW5kcyBLYWx0dXJhRmxhdm9yUGFyYW1zT3V0cHV0QXJncyB7XG4gICAgZGVuc2l0eVdpZHRoPyA6IG51bWJlcjtcblx0ZGVuc2l0eUhlaWdodD8gOiBudW1iZXI7XG5cdHNpemVXaWR0aD8gOiBudW1iZXI7XG5cdHNpemVIZWlnaHQ/IDogbnVtYmVyO1xuXHRkZXB0aD8gOiBudW1iZXI7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFJbWFnZUZsYXZvclBhcmFtc091dHB1dCBleHRlbmRzIEthbHR1cmFGbGF2b3JQYXJhbXNPdXRwdXQge1xuXG4gICAgZGVuc2l0eVdpZHRoIDogbnVtYmVyO1xuXHRkZW5zaXR5SGVpZ2h0IDogbnVtYmVyO1xuXHRzaXplV2lkdGggOiBudW1iZXI7XG5cdHNpemVIZWlnaHQgOiBudW1iZXI7XG5cdGRlcHRoIDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhSW1hZ2VGbGF2b3JQYXJhbXNPdXRwdXRBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUltYWdlRmxhdm9yUGFyYW1zT3V0cHV0JyB9LFxuXHRcdFx0XHRkZW5zaXR5V2lkdGggOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0ZGVuc2l0eUhlaWdodCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRzaXplV2lkdGggOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0c2l6ZUhlaWdodCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRkZXB0aCA6IHsgdHlwZSA6ICduJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhSW1hZ2VGbGF2b3JQYXJhbXNPdXRwdXQnXSA9IEthbHR1cmFJbWFnZUZsYXZvclBhcmFtc091dHB1dDsiXX0=