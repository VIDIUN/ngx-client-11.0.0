/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaUrlTokenizer } from './KalturaUrlTokenizer';
/**
 * @record
 */
export function KalturaUrlTokenizerAkamaiSecureHdArgs() { }
/** @type {?|undefined} */
KalturaUrlTokenizerAkamaiSecureHdArgs.prototype.paramName;
/** @type {?|undefined} */
KalturaUrlTokenizerAkamaiSecureHdArgs.prototype.aclPostfix;
/** @type {?|undefined} */
KalturaUrlTokenizerAkamaiSecureHdArgs.prototype.customPostfixes;
/** @type {?|undefined} */
KalturaUrlTokenizerAkamaiSecureHdArgs.prototype.useCookieHosts;
/** @type {?|undefined} */
KalturaUrlTokenizerAkamaiSecureHdArgs.prototype.rootDir;
export class KalturaUrlTokenizerAkamaiSecureHd extends KalturaUrlTokenizer {
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
            objectType: { type: 'c', default: 'KalturaUrlTokenizerAkamaiSecureHd' },
            paramName: { type: 's' },
            aclPostfix: { type: 's' },
            customPostfixes: { type: 's' },
            useCookieHosts: { type: 's' },
            rootDir: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaUrlTokenizerAkamaiSecureHd.prototype.paramName;
    /** @type {?} */
    KalturaUrlTokenizerAkamaiSecureHd.prototype.aclPostfix;
    /** @type {?} */
    KalturaUrlTokenizerAkamaiSecureHd.prototype.customPostfixes;
    /** @type {?} */
    KalturaUrlTokenizerAkamaiSecureHd.prototype.useCookieHosts;
    /** @type {?} */
    KalturaUrlTokenizerAkamaiSecureHd.prototype.rootDir;
}
typesMappingStorage['KalturaUrlTokenizerAkamaiSecureHd'] = KalturaUrlTokenizerAkamaiSecureHd;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVVybFRva2VuaXplckFrYW1haVNlY3VyZUhkLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhVXJsVG9rZW5pemVyQWthbWFpU2VjdXJlSGQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsbUJBQW1CLEVBQTJCLE1BQU0sdUJBQXVCLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQVdyRixNQUFNLHdDQUF5QyxTQUFRLG1CQUFtQjs7OztJQVF0RSxZQUFZLElBQTZDO1FBRXJELEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxtQ0FBbUMsRUFBRTtZQUN0RixTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzFCLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDM0IsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNoQyxjQUFjLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQy9CLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDZixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxtQ0FBbUMsQ0FBQyxHQUFHLGlDQUFpQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFVcmxUb2tlbml6ZXIsIEthbHR1cmFVcmxUb2tlbml6ZXJBcmdzIH0gZnJvbSAnLi9LYWx0dXJhVXJsVG9rZW5pemVyJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhVXJsVG9rZW5pemVyQWthbWFpU2VjdXJlSGRBcmdzICBleHRlbmRzIEthbHR1cmFVcmxUb2tlbml6ZXJBcmdzIHtcbiAgICBwYXJhbU5hbWU/IDogc3RyaW5nO1xuXHRhY2xQb3N0Zml4PyA6IHN0cmluZztcblx0Y3VzdG9tUG9zdGZpeGVzPyA6IHN0cmluZztcblx0dXNlQ29va2llSG9zdHM/IDogc3RyaW5nO1xuXHRyb290RGlyPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYVVybFRva2VuaXplckFrYW1haVNlY3VyZUhkIGV4dGVuZHMgS2FsdHVyYVVybFRva2VuaXplciB7XG5cbiAgICBwYXJhbU5hbWUgOiBzdHJpbmc7XG5cdGFjbFBvc3RmaXggOiBzdHJpbmc7XG5cdGN1c3RvbVBvc3RmaXhlcyA6IHN0cmluZztcblx0dXNlQ29va2llSG9zdHMgOiBzdHJpbmc7XG5cdHJvb3REaXIgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFVcmxUb2tlbml6ZXJBa2FtYWlTZWN1cmVIZEFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhVXJsVG9rZW5pemVyQWthbWFpU2VjdXJlSGQnIH0sXG5cdFx0XHRcdHBhcmFtTmFtZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRhY2xQb3N0Zml4IDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGN1c3RvbVBvc3RmaXhlcyA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR1c2VDb29raWVIb3N0cyA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRyb290RGlyIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFVcmxUb2tlbml6ZXJBa2FtYWlTZWN1cmVIZCddID0gS2FsdHVyYVVybFRva2VuaXplckFrYW1haVNlY3VyZUhkOyJdfQ==