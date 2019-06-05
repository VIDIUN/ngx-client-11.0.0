/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
export class KalturaThumbParamsOutput extends KalturaThumbParams {
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
            objectType: { type: 'c', default: 'KalturaThumbParamsOutput' },
            thumbParamsId: { type: 'n' },
            thumbParamsVersion: { type: 's' },
            thumbAssetId: { type: 's' },
            thumbAssetVersion: { type: 's' },
            rotate: { type: 'n' }
        });
        return result;
    }
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVRodW1iUGFyYW1zT3V0cHV0LmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhVGh1bWJQYXJhbXNPdXRwdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsa0JBQWtCLEVBQTBCLE1BQU0sc0JBQXNCLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQVdsRixNQUFNLCtCQUFnQyxTQUFRLGtCQUFrQjs7OztJQVE1RCxZQUFZLElBQW9DO1FBRTVDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRywwQkFBMEIsRUFBRTtZQUM3RSxhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzlCLGtCQUFrQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNuQyxZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzdCLGlCQUFpQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNsQyxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ2QsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsMEJBQTBCLENBQUMsR0FBRyx3QkFBd0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhVGh1bWJQYXJhbXMsIEthbHR1cmFUaHVtYlBhcmFtc0FyZ3MgfSBmcm9tICcuL0thbHR1cmFUaHVtYlBhcmFtcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYVRodW1iUGFyYW1zT3V0cHV0QXJncyAgZXh0ZW5kcyBLYWx0dXJhVGh1bWJQYXJhbXNBcmdzIHtcbiAgICB0aHVtYlBhcmFtc0lkPyA6IG51bWJlcjtcblx0dGh1bWJQYXJhbXNWZXJzaW9uPyA6IHN0cmluZztcblx0dGh1bWJBc3NldElkPyA6IHN0cmluZztcblx0dGh1bWJBc3NldFZlcnNpb24/IDogc3RyaW5nO1xuXHRyb3RhdGU/IDogbnVtYmVyO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhVGh1bWJQYXJhbXNPdXRwdXQgZXh0ZW5kcyBLYWx0dXJhVGh1bWJQYXJhbXMge1xuXG4gICAgdGh1bWJQYXJhbXNJZCA6IG51bWJlcjtcblx0dGh1bWJQYXJhbXNWZXJzaW9uIDogc3RyaW5nO1xuXHR0aHVtYkFzc2V0SWQgOiBzdHJpbmc7XG5cdHRodW1iQXNzZXRWZXJzaW9uIDogc3RyaW5nO1xuXHRyb3RhdGUgOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFUaHVtYlBhcmFtc091dHB1dEFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhVGh1bWJQYXJhbXNPdXRwdXQnIH0sXG5cdFx0XHRcdHRodW1iUGFyYW1zSWQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0dGh1bWJQYXJhbXNWZXJzaW9uIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHRodW1iQXNzZXRJZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR0aHVtYkFzc2V0VmVyc2lvbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRyb3RhdGUgOiB7IHR5cGUgOiAnbicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYVRodW1iUGFyYW1zT3V0cHV0J10gPSBLYWx0dXJhVGh1bWJQYXJhbXNPdXRwdXQ7Il19