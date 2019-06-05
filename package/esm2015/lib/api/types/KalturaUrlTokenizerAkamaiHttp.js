/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaUrlTokenizer } from './KalturaUrlTokenizer';
/**
 * @record
 */
export function KalturaUrlTokenizerAkamaiHttpArgs() { }
/** @type {?|undefined} */
KalturaUrlTokenizerAkamaiHttpArgs.prototype.paramName;
/** @type {?|undefined} */
KalturaUrlTokenizerAkamaiHttpArgs.prototype.rootDir;
export class KalturaUrlTokenizerAkamaiHttp extends KalturaUrlTokenizer {
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
            objectType: { type: 'c', default: 'KalturaUrlTokenizerAkamaiHttp' },
            paramName: { type: 's' },
            rootDir: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaUrlTokenizerAkamaiHttp.prototype.paramName;
    /** @type {?} */
    KalturaUrlTokenizerAkamaiHttp.prototype.rootDir;
}
typesMappingStorage['KalturaUrlTokenizerAkamaiHttp'] = KalturaUrlTokenizerAkamaiHttp;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVVybFRva2VuaXplckFrYW1haUh0dHAuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFVcmxUb2tlbml6ZXJBa2FtYWlIdHRwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLG1CQUFtQixFQUEyQixNQUFNLHVCQUF1QixDQUFDOzs7Ozs7Ozs7QUFRckYsTUFBTSxvQ0FBcUMsU0FBUSxtQkFBbUI7Ozs7SUFLbEUsWUFBWSxJQUF5QztRQUVqRCxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsK0JBQStCLEVBQUU7WUFDbEYsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQixPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ2YsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsK0JBQStCLENBQUMsR0FBRyw2QkFBNkIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhVXJsVG9rZW5pemVyLCBLYWx0dXJhVXJsVG9rZW5pemVyQXJncyB9IGZyb20gJy4vS2FsdHVyYVVybFRva2VuaXplcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYVVybFRva2VuaXplckFrYW1haUh0dHBBcmdzICBleHRlbmRzIEthbHR1cmFVcmxUb2tlbml6ZXJBcmdzIHtcbiAgICBwYXJhbU5hbWU/IDogc3RyaW5nO1xuXHRyb290RGlyPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYVVybFRva2VuaXplckFrYW1haUh0dHAgZXh0ZW5kcyBLYWx0dXJhVXJsVG9rZW5pemVyIHtcblxuICAgIHBhcmFtTmFtZSA6IHN0cmluZztcblx0cm9vdERpciA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYVVybFRva2VuaXplckFrYW1haUh0dHBBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYVVybFRva2VuaXplckFrYW1haUh0dHAnIH0sXG5cdFx0XHRcdHBhcmFtTmFtZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRyb290RGlyIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFVcmxUb2tlbml6ZXJBa2FtYWlIdHRwJ10gPSBLYWx0dXJhVXJsVG9rZW5pemVyQWthbWFpSHR0cDsiXX0=