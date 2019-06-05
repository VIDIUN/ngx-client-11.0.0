/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaValue } from './KalturaValue';
/**
 * @record
 */
export function KalturaBooleanValueArgs() { }
/** @type {?|undefined} */
KalturaBooleanValueArgs.prototype.value;
export class KalturaBooleanValue extends KalturaValue {
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
            objectType: { type: 'c', default: 'KalturaBooleanValue' },
            value: { type: 'b' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaBooleanValue.prototype.value;
}
typesMappingStorage['KalturaBooleanValue'] = KalturaBooleanValue;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUJvb2xlYW5WYWx1ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUJvb2xlYW5WYWx1ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxZQUFZLEVBQW9CLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7QUFPaEUsTUFBTSwwQkFBMkIsU0FBUSxZQUFZOzs7O0lBSWpELFlBQVksSUFBK0I7UUFFdkMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHFCQUFxQixFQUFFO1lBQ3hFLEtBQUssRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDYixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7O0FBRUQsbUJBQW1CLENBQUMscUJBQXFCLENBQUMsR0FBRyxtQkFBbUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhVmFsdWUsIEthbHR1cmFWYWx1ZUFyZ3MgfSBmcm9tICcuL0thbHR1cmFWYWx1ZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUJvb2xlYW5WYWx1ZUFyZ3MgIGV4dGVuZHMgS2FsdHVyYVZhbHVlQXJncyB7XG4gICAgdmFsdWU/IDogYm9vbGVhbjtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUJvb2xlYW5WYWx1ZSBleHRlbmRzIEthbHR1cmFWYWx1ZSB7XG5cbiAgICB2YWx1ZSA6IGJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFCb29sZWFuVmFsdWVBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUJvb2xlYW5WYWx1ZScgfSxcblx0XHRcdFx0dmFsdWUgOiB7IHR5cGUgOiAnYicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUJvb2xlYW5WYWx1ZSddID0gS2FsdHVyYUJvb2xlYW5WYWx1ZTsiXX0=