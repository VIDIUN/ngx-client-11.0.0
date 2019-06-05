/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaRemoteDropFolder } from './KalturaRemoteDropFolder';
/**
 * @record
 */
export function KalturaSshDropFolderArgs() { }
/** @type {?|undefined} */
KalturaSshDropFolderArgs.prototype.host;
/** @type {?|undefined} */
KalturaSshDropFolderArgs.prototype.port;
/** @type {?|undefined} */
KalturaSshDropFolderArgs.prototype.username;
/** @type {?|undefined} */
KalturaSshDropFolderArgs.prototype.password;
/** @type {?|undefined} */
KalturaSshDropFolderArgs.prototype.privateKey;
/** @type {?|undefined} */
KalturaSshDropFolderArgs.prototype.publicKey;
/** @type {?|undefined} */
KalturaSshDropFolderArgs.prototype.passPhrase;
export class KalturaSshDropFolder extends KalturaRemoteDropFolder {
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
            objectType: { type: 'c', default: 'KalturaSshDropFolder' },
            host: { type: 's' },
            port: { type: 'n' },
            username: { type: 's' },
            password: { type: 's' },
            privateKey: { type: 's' },
            publicKey: { type: 's' },
            passPhrase: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaSshDropFolder.prototype.host;
    /** @type {?} */
    KalturaSshDropFolder.prototype.port;
    /** @type {?} */
    KalturaSshDropFolder.prototype.username;
    /** @type {?} */
    KalturaSshDropFolder.prototype.password;
    /** @type {?} */
    KalturaSshDropFolder.prototype.privateKey;
    /** @type {?} */
    KalturaSshDropFolder.prototype.publicKey;
    /** @type {?} */
    KalturaSshDropFolder.prototype.passPhrase;
}
typesMappingStorage['KalturaSshDropFolder'] = KalturaSshDropFolder;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVNzaERyb3BGb2xkZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFTc2hEcm9wRm9sZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHVCQUF1QixFQUErQixNQUFNLDJCQUEyQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYWpHLE1BQU0sMkJBQTRCLFNBQVEsdUJBQXVCOzs7O0lBVTdELFlBQVksSUFBZ0M7UUFFeEMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHNCQUFzQixFQUFFO1lBQ3pFLElBQUksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDckIsSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNyQixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMzQixTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzFCLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDbEIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLHNCQUFzQixDQUFDLEdBQUcsb0JBQW9CLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVJlbW90ZURyb3BGb2xkZXIsIEthbHR1cmFSZW1vdGVEcm9wRm9sZGVyQXJncyB9IGZyb20gJy4vS2FsdHVyYVJlbW90ZURyb3BGb2xkZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFTc2hEcm9wRm9sZGVyQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVtb3RlRHJvcEZvbGRlckFyZ3Mge1xuICAgIGhvc3Q/IDogc3RyaW5nO1xuXHRwb3J0PyA6IG51bWJlcjtcblx0dXNlcm5hbWU/IDogc3RyaW5nO1xuXHRwYXNzd29yZD8gOiBzdHJpbmc7XG5cdHByaXZhdGVLZXk/IDogc3RyaW5nO1xuXHRwdWJsaWNLZXk/IDogc3RyaW5nO1xuXHRwYXNzUGhyYXNlPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYVNzaERyb3BGb2xkZXIgZXh0ZW5kcyBLYWx0dXJhUmVtb3RlRHJvcEZvbGRlciB7XG5cbiAgICBob3N0IDogc3RyaW5nO1xuXHRwb3J0IDogbnVtYmVyO1xuXHR1c2VybmFtZSA6IHN0cmluZztcblx0cGFzc3dvcmQgOiBzdHJpbmc7XG5cdHByaXZhdGVLZXkgOiBzdHJpbmc7XG5cdHB1YmxpY0tleSA6IHN0cmluZztcblx0cGFzc1BocmFzZSA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYVNzaERyb3BGb2xkZXJBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYVNzaERyb3BGb2xkZXInIH0sXG5cdFx0XHRcdGhvc3QgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cG9ydCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHR1c2VybmFtZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRwYXNzd29yZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRwcml2YXRlS2V5IDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHB1YmxpY0tleSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRwYXNzUGhyYXNlIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFTc2hEcm9wRm9sZGVyJ10gPSBLYWx0dXJhU3NoRHJvcEZvbGRlcjsiXX0=