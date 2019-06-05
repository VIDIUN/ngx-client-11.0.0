/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
export class KalturaImageFlavorParamsOutput extends KalturaFlavorParamsOutput {
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
            objectType: { type: 'c', default: 'KalturaImageFlavorParamsOutput' },
            densityWidth: { type: 'n' },
            densityHeight: { type: 'n' },
            sizeWidth: { type: 'n' },
            sizeHeight: { type: 'n' },
            depth: { type: 'n' }
        });
        return result;
    }
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUltYWdlRmxhdm9yUGFyYW1zT3V0cHV0LmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhSW1hZ2VGbGF2b3JQYXJhbXNPdXRwdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUseUJBQXlCLEVBQWlDLE1BQU0sNkJBQTZCLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQVd2RyxNQUFNLHFDQUFzQyxTQUFRLHlCQUF5Qjs7OztJQVF6RSxZQUFZLElBQTBDO1FBRWxELEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxnQ0FBZ0MsRUFBRTtZQUNuRixZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzdCLGFBQWEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDOUIsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQixVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzNCLEtBQUssRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDYixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxnQ0FBZ0MsQ0FBQyxHQUFHLDhCQUE4QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFGbGF2b3JQYXJhbXNPdXRwdXQsIEthbHR1cmFGbGF2b3JQYXJhbXNPdXRwdXRBcmdzIH0gZnJvbSAnLi9LYWx0dXJhRmxhdm9yUGFyYW1zT3V0cHV0JztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhSW1hZ2VGbGF2b3JQYXJhbXNPdXRwdXRBcmdzICBleHRlbmRzIEthbHR1cmFGbGF2b3JQYXJhbXNPdXRwdXRBcmdzIHtcbiAgICBkZW5zaXR5V2lkdGg/IDogbnVtYmVyO1xuXHRkZW5zaXR5SGVpZ2h0PyA6IG51bWJlcjtcblx0c2l6ZVdpZHRoPyA6IG51bWJlcjtcblx0c2l6ZUhlaWdodD8gOiBudW1iZXI7XG5cdGRlcHRoPyA6IG51bWJlcjtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUltYWdlRmxhdm9yUGFyYW1zT3V0cHV0IGV4dGVuZHMgS2FsdHVyYUZsYXZvclBhcmFtc091dHB1dCB7XG5cbiAgICBkZW5zaXR5V2lkdGggOiBudW1iZXI7XG5cdGRlbnNpdHlIZWlnaHQgOiBudW1iZXI7XG5cdHNpemVXaWR0aCA6IG51bWJlcjtcblx0c2l6ZUhlaWdodCA6IG51bWJlcjtcblx0ZGVwdGggOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFJbWFnZUZsYXZvclBhcmFtc091dHB1dEFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhSW1hZ2VGbGF2b3JQYXJhbXNPdXRwdXQnIH0sXG5cdFx0XHRcdGRlbnNpdHlXaWR0aCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRkZW5zaXR5SGVpZ2h0IDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHNpemVXaWR0aCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRzaXplSGVpZ2h0IDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGRlcHRoIDogeyB0eXBlIDogJ24nIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFJbWFnZUZsYXZvclBhcmFtc091dHB1dCddID0gS2FsdHVyYUltYWdlRmxhdm9yUGFyYW1zT3V0cHV0OyJdfQ==