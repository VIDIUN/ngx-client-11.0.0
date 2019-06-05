/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
export class KalturaImageFlavorParams extends KalturaFlavorParams {
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
            objectType: { type: 'c', default: 'KalturaImageFlavorParams' },
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUltYWdlRmxhdm9yUGFyYW1zLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhSW1hZ2VGbGF2b3JQYXJhbXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsbUJBQW1CLEVBQTJCLE1BQU0sdUJBQXVCLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQVdyRixNQUFNLCtCQUFnQyxTQUFRLG1CQUFtQjs7OztJQVE3RCxZQUFZLElBQW9DO1FBRTVDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRywwQkFBMEIsRUFBRTtZQUM3RSxZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzdCLGFBQWEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDOUIsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQixVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzNCLEtBQUssRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDYixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQywwQkFBMEIsQ0FBQyxHQUFHLHdCQUF3QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFGbGF2b3JQYXJhbXMsIEthbHR1cmFGbGF2b3JQYXJhbXNBcmdzIH0gZnJvbSAnLi9LYWx0dXJhRmxhdm9yUGFyYW1zJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhSW1hZ2VGbGF2b3JQYXJhbXNBcmdzICBleHRlbmRzIEthbHR1cmFGbGF2b3JQYXJhbXNBcmdzIHtcbiAgICBkZW5zaXR5V2lkdGg/IDogbnVtYmVyO1xuXHRkZW5zaXR5SGVpZ2h0PyA6IG51bWJlcjtcblx0c2l6ZVdpZHRoPyA6IG51bWJlcjtcblx0c2l6ZUhlaWdodD8gOiBudW1iZXI7XG5cdGRlcHRoPyA6IG51bWJlcjtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUltYWdlRmxhdm9yUGFyYW1zIGV4dGVuZHMgS2FsdHVyYUZsYXZvclBhcmFtcyB7XG5cbiAgICBkZW5zaXR5V2lkdGggOiBudW1iZXI7XG5cdGRlbnNpdHlIZWlnaHQgOiBudW1iZXI7XG5cdHNpemVXaWR0aCA6IG51bWJlcjtcblx0c2l6ZUhlaWdodCA6IG51bWJlcjtcblx0ZGVwdGggOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFJbWFnZUZsYXZvclBhcmFtc0FyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhSW1hZ2VGbGF2b3JQYXJhbXMnIH0sXG5cdFx0XHRcdGRlbnNpdHlXaWR0aCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRkZW5zaXR5SGVpZ2h0IDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHNpemVXaWR0aCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRzaXplSGVpZ2h0IDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGRlcHRoIDogeyB0eXBlIDogJ24nIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFJbWFnZUZsYXZvclBhcmFtcyddID0gS2FsdHVyYUltYWdlRmxhdm9yUGFyYW1zOyJdfQ==