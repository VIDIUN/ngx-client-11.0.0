/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaUrlResource } from './KalturaUrlResource';
/**
 * @record
 */
export function KalturaSshUrlResourceArgs() { }
/** @type {?|undefined} */
KalturaSshUrlResourceArgs.prototype.privateKey;
/** @type {?|undefined} */
KalturaSshUrlResourceArgs.prototype.publicKey;
/** @type {?|undefined} */
KalturaSshUrlResourceArgs.prototype.keyPassphrase;
export class KalturaSshUrlResource extends KalturaUrlResource {
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
            objectType: { type: 'c', default: 'KalturaSshUrlResource' },
            privateKey: { type: 's' },
            publicKey: { type: 's' },
            keyPassphrase: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaSshUrlResource.prototype.privateKey;
    /** @type {?} */
    KalturaSshUrlResource.prototype.publicKey;
    /** @type {?} */
    KalturaSshUrlResource.prototype.keyPassphrase;
}
typesMappingStorage['KalturaSshUrlResource'] = KalturaSshUrlResource;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVNzaFVybFJlc291cmNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhU3NoVXJsUmVzb3VyY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsa0JBQWtCLEVBQTBCLE1BQU0sc0JBQXNCLENBQUM7Ozs7Ozs7Ozs7O0FBU2xGLE1BQU0sNEJBQTZCLFNBQVEsa0JBQWtCOzs7O0lBTXpELFlBQVksSUFBaUM7UUFFekMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHVCQUF1QixFQUFFO1lBQzFFLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDM0IsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQixhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ3JCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsdUJBQXVCLENBQUMsR0FBRyxxQkFBcUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhVXJsUmVzb3VyY2UsIEthbHR1cmFVcmxSZXNvdXJjZUFyZ3MgfSBmcm9tICcuL0thbHR1cmFVcmxSZXNvdXJjZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYVNzaFVybFJlc291cmNlQXJncyAgZXh0ZW5kcyBLYWx0dXJhVXJsUmVzb3VyY2VBcmdzIHtcbiAgICBwcml2YXRlS2V5PyA6IHN0cmluZztcblx0cHVibGljS2V5PyA6IHN0cmluZztcblx0a2V5UGFzc3BocmFzZT8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFTc2hVcmxSZXNvdXJjZSBleHRlbmRzIEthbHR1cmFVcmxSZXNvdXJjZSB7XG5cbiAgICBwcml2YXRlS2V5IDogc3RyaW5nO1xuXHRwdWJsaWNLZXkgOiBzdHJpbmc7XG5cdGtleVBhc3NwaHJhc2UgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFTc2hVcmxSZXNvdXJjZUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhU3NoVXJsUmVzb3VyY2UnIH0sXG5cdFx0XHRcdHByaXZhdGVLZXkgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cHVibGljS2V5IDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGtleVBhc3NwaHJhc2UgOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYVNzaFVybFJlc291cmNlJ10gPSBLYWx0dXJhU3NoVXJsUmVzb3VyY2U7Il19