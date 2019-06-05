/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaThumbParams } from './KalturaThumbParams';
/**
 * @record
 */
export function KalturaThumbParamsOutputArgs() { }
/** @type {?|undefined} */
KalturaThumbParamsOutputArgs.prototype.thumbParamsId;
/** @type {?|undefined} */
KalturaThumbParamsOutputArgs.prototype.thumbParamsVersion;
/** @type {?|undefined} */
KalturaThumbParamsOutputArgs.prototype.thumbAssetId;
/** @type {?|undefined} */
KalturaThumbParamsOutputArgs.prototype.thumbAssetVersion;
/** @type {?|undefined} */
KalturaThumbParamsOutputArgs.prototype.rotate;
var KalturaThumbParamsOutput = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaThumbParamsOutput, _super);
    function KalturaThumbParamsOutput(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaThumbParamsOutput.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaThumbParamsOutput' },
            thumbParamsId: { type: 'n' },
            thumbParamsVersion: { type: 's' },
            thumbAssetId: { type: 's' },
            thumbAssetVersion: { type: 's' },
            rotate: { type: 'n' }
        });
        return result;
    };
    return KalturaThumbParamsOutput;
}(KalturaThumbParams));
export { KalturaThumbParamsOutput };
if (false) {
    /** @type {?} */
    KalturaThumbParamsOutput.prototype.thumbParamsId;
    /** @type {?} */
    KalturaThumbParamsOutput.prototype.thumbParamsVersion;
    /** @type {?} */
    KalturaThumbParamsOutput.prototype.thumbAssetId;
    /** @type {?} */
    KalturaThumbParamsOutput.prototype.thumbAssetVersion;
    /** @type {?} */
    KalturaThumbParamsOutput.prototype.rotate;
}
typesMappingStorage['KalturaThumbParamsOutput'] = KalturaThumbParamsOutput;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVRodW1iUGFyYW1zT3V0cHV0LmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhVGh1bWJQYXJhbXNPdXRwdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGtCQUFrQixFQUEwQixNQUFNLHNCQUFzQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUFXbEYsSUFBQTtJQUE4QyxvREFBa0I7SUFRNUQsa0NBQVksSUFBb0M7ZUFFNUMsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUywrQ0FBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRywwQkFBMEIsRUFBRTtZQUM3RSxhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzlCLGtCQUFrQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNuQyxZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzdCLGlCQUFpQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNsQyxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ2QsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjttQ0F6Q0w7RUFhOEMsa0JBQWtCLEVBNkIvRCxDQUFBO0FBN0JELG9DQTZCQzs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLDBCQUEwQixDQUFDLEdBQUcsd0JBQXdCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVRodW1iUGFyYW1zLCBLYWx0dXJhVGh1bWJQYXJhbXNBcmdzIH0gZnJvbSAnLi9LYWx0dXJhVGh1bWJQYXJhbXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFUaHVtYlBhcmFtc091dHB1dEFyZ3MgIGV4dGVuZHMgS2FsdHVyYVRodW1iUGFyYW1zQXJncyB7XG4gICAgdGh1bWJQYXJhbXNJZD8gOiBudW1iZXI7XG5cdHRodW1iUGFyYW1zVmVyc2lvbj8gOiBzdHJpbmc7XG5cdHRodW1iQXNzZXRJZD8gOiBzdHJpbmc7XG5cdHRodW1iQXNzZXRWZXJzaW9uPyA6IHN0cmluZztcblx0cm90YXRlPyA6IG51bWJlcjtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYVRodW1iUGFyYW1zT3V0cHV0IGV4dGVuZHMgS2FsdHVyYVRodW1iUGFyYW1zIHtcblxuICAgIHRodW1iUGFyYW1zSWQgOiBudW1iZXI7XG5cdHRodW1iUGFyYW1zVmVyc2lvbiA6IHN0cmluZztcblx0dGh1bWJBc3NldElkIDogc3RyaW5nO1xuXHR0aHVtYkFzc2V0VmVyc2lvbiA6IHN0cmluZztcblx0cm90YXRlIDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhVGh1bWJQYXJhbXNPdXRwdXRBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYVRodW1iUGFyYW1zT3V0cHV0JyB9LFxuXHRcdFx0XHR0aHVtYlBhcmFtc0lkIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHRodW1iUGFyYW1zVmVyc2lvbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR0aHVtYkFzc2V0SWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dGh1bWJBc3NldFZlcnNpb24gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cm90YXRlIDogeyB0eXBlIDogJ24nIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFUaHVtYlBhcmFtc091dHB1dCddID0gS2FsdHVyYVRodW1iUGFyYW1zT3V0cHV0OyJdfQ==